import { Injectable, UnauthorizedException, BadRequestException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../entities/user.entity';
import { MailService } from '../../mail/services/mail.service';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import * as nodemailer from 'nodemailer';
import { CodeAuthDto } from '../dto/code-auth.dto';
import { UserService } from './user.service';
import { TokenBlacklistService } from '@src/libs/common/services/token-blacklist.service';
@Injectable()
export class AuthService {
  private transporter: nodemailer.Transporter;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly userSerive: UserService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
    private readonly configService: ConfigService,
    private readonly tokenBlacklistService: TokenBlacklistService,
  ) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get('MAIL_HOST'),
      port: this.configService.get('MAIL_PORT'),
      auth: {
        user: this.configService.get('MAIL_USER'),
        pass: this.configService.get('MAIL_PASSWORD'),
      },
    });
  }

  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async verifyOtp(data: CodeAuthDto): Promise<any> {
    return this.userSerive.handleActive(data);
  }

  async signup(email: string, password: string, firstName?: string, lastName?: string) {
    const existingUser = await this.userRepository.findOne({ where: { email } });
    const otp = this.generateOtp();
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    const user = this.userRepository.create({
      email,
      password,
      firstName,
      lastName,
    });
    await this.mailService.sendUserConfirmation(email, otp);
    await this.userRepository.save(user);
    return this.generateTokens(user);
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
        firstName: true,
        lastName: true,
      }
    });
    
    if (!user) {
      throw new NotFoundException('User not found with this email');
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('Login attempt:', {
        email,
        hasPassword: !!user.password,
        passwordLength: user.password?.length
      });
    }

    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Incorrect password');
    }

    return this.generateTokens(user);
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get('jwt.refreshSecret'),
      });

      const user = await this.userRepository.findOne({ where: { id: payload.sub } });
      if (!user) {
        throw new NotFoundException('User no longer exists');
      }

      if (!user.refreshToken) {
        throw new UnauthorizedException('Refresh token has been revoked');
      }

      if (user.refreshToken !== refreshToken) {
        throw new UnauthorizedException('Invalid refresh token for this user');
      }

      return this.generateTokens(user);
    } catch (error) {
      if (error instanceof UnauthorizedException || error instanceof NotFoundException) {
        throw error;
      }
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  async forgotPassword(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('No user found with this email address');
    }

    const resetToken = uuidv4();
    const resetTokenExpiry = new Date();
    resetTokenExpiry.setHours(resetTokenExpiry.getHours() + 1);

    user.passwordResetToken = resetToken;
    user.passwordResetExpires = resetTokenExpiry;
    await this.userRepository.save(user);

    const resetUrl = `${this.configService.get('APP_URL')}/reset-password?token=${resetToken}`;
    await this.transporter.sendMail({
      from: this.configService.get('MAIL_FROM'),
      to: email,
      subject: 'Password Reset Request',
      html: `
        <p>You requested a password reset</p>
        <p>Click this <a href="${resetUrl}">link</a> to reset your password</p>
        <p>If you didn't request this, please ignore this email</p>
      `,
    });

    return { message: 'Password reset email sent' };
  }

  async resetPassword(token: string, newPassword: string) {
    const user = await this.userRepository.findOne({
      where: {
        passwordResetToken: token,
        passwordResetExpires: new Date(),
      },
    });

    if (!user) {
      throw new BadRequestException('Password reset token is invalid or has expired');
    }

    if (!newPassword) {
      throw new BadRequestException('New password is required');
    }

    if (newPassword.length < 8) {
      throw new BadRequestException('Password must be at least 8 characters long');
    }

    user.password = newPassword;
    user.passwordResetToken = null;
    user.passwordResetExpires = null;
    await this.userRepository.save(user);

    return { message: 'Password successfully reset' };
  }

  async logout(userId: string,  token: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!user.refreshToken) {
      throw new BadRequestException('User is already logged out');
    }

    user.refreshToken = null;
    await this.userRepository.save(user);
    const pureToken = token.replace('Bearer ', '')
    const expiresIn = 900
    await this.tokenBlacklistService.blacklistToken(pureToken, expiresIn)
    return { message: 'Successfully logged out' };
  }

  async findAllUsers() {
    const users = await this.userRepository.find({
      select: [
        'id',
        'email',
        'firstName',
        'lastName',
        'role',
        'isEmailVerified',
        'createdAt',
        'updatedAt',
      ],
    });
    return users;
  }

  private async generateTokens(user: User) {
    if (!user.id || !user.email) {
      throw new BadRequestException('Invalid user data for token generation');
    }

    try {
      const [accessToken, refreshToken] = await Promise.all([
        this.jwtService.signAsync(
          {
            sub: user.id,
            email: user.email,
            role: user.role,
          },
          {
            secret: this.configService.get('jwt.secret'),
            expiresIn: this.configService.get('jwt.expiresIn'),
          },
        ),
        this.jwtService.signAsync(
          {
            sub: user.id,
          },
          {
            secret: this.configService.get('jwt.refreshSecret'),
            expiresIn: this.configService.get('jwt.refreshExpiresIn'),
          },
        ),
      ]);

      user.refreshToken = refreshToken;
      await this.userRepository.save(user);

      return {
        accessToken,
        refreshToken,
      };
    } catch (error) {
      throw new BadRequestException('Failed to generate authentication tokens');
    }
  }
} 