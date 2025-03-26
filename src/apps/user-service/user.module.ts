import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './entities/user.entity';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RolesGuard } from '../../libs/common/guards/roles.guard';
import { databaseConfig } from '../../libs/config/database.config';
import { jwtConfig } from '../../libs/config/jwt.config';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { TokenBlacklistService } from 'src/libs/common/services/token-blacklist.service';
import { RedisModule } from 'src/redis/redis.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, jwtConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database.users'),
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
  ],
  controllers: [AuthController, UserController],
  providers: [AuthService, UserService, JwtStrategy, RolesGuard,TokenBlacklistService,],
})
export class UserModule {} 