import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { TokenBlacklistService } from '@src/libs/common/services/token-blacklist.service';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly tokenBlacklistService: TokenBlacklistService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwt.secret'),
      passReqToCallback: true,
    });
  }

  async validate(req: any, payload: any) {
    const authHeader = req.headers['authorization'] || ''
    const token = authHeader.replace('Bearer ', '')
  
    if (!payload?.sub) {
      throw new UnauthorizedException('Invalid token payload')
    }
  
    const user = await this.userRepository.findOne({ where: { id: payload.sub } })
    if (!user) {
      throw new UnauthorizedException('User no longer exists')
    }
  
    if (await this.tokenBlacklistService.isBlacklisted(token)) {
      throw new UnauthorizedException('Token is blacklisted')
    }
    console.log('[JWT] Checking token:', token)
    return user
  }
} 