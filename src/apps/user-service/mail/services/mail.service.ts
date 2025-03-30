import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendUserConfirmation(email: string, otp: string) {
    this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to Nice App! Confirm your Email',
      template: 'mail',
      context: {
        email: email,
        otp: otp,
        appName: 'FindyHome',
      },
    });
    return 'ok';
  }

  async sendMailResetPassword({ email, name, token }) {
    this.mailerService.sendMail({
      to: email,
      subject: 'Reset Password',
      template: 'mail',
      context: {
        username: name,
        resetLink: `${this.configService.get<string>('CLIENT_URL')}/reset-password?token=${token}`,
      },
    });
    return 'ok';
  }
}
