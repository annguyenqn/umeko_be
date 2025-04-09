import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './src/entities/user.entity';
import { AuthService } from './src/services/auth.service';
import { AuthController } from './src/controllers/auth.controller';
import { JwtStrategy } from './src/strategies/jwt.strategy';
import { RolesGuard } from './src/libs/common/guards/roles.guard';
import { databaseConfig } from './src/libs/config/database.config';
import { jwtConfig } from './src/libs/config/jwt.config';
import { UserController } from './src/controllers/user.controller';
import { UserService } from './src/services/user.service';
import { MailModule } from './mail/mail.module';
import { TokenBlacklistService } from './src/libs/common/services/token-blacklist.service';
import { RedisModule } from './src/redis/redis.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    MailModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, jwtConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database.users'),
        entities: [User],
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('jwt.secret'),
        signOptions: {
          expiresIn: configService.get('jwt.expiresIn'),
        },
      }),
      inject: [ConfigService],
    }),
    RedisModule,
    ClientsModule.register([
      {
        name: 'USER_SERVICE', 
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'user_queue', 
          queueOptions: {
            durable: false, 
          },
        },
      },
    ]),
  ],
  controllers: [AuthController, UserController],
  providers: [AuthService, UserService, JwtStrategy, RolesGuard,TokenBlacklistService,],
})
export class UserModule {} 