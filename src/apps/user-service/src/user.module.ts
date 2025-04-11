import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './entities/user.entity';
import { UserVocab } from './entities/user-vocab.entity';
import { UserProgress } from './entities/user-progress.entity';
import { UserReviewHistory } from './entities/user-review-history.entity';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RolesGuard } from './libs/common/guards/roles.guard';
import { databaseConfig } from './libs/config/database.config';
import { jwtConfig } from './libs/config/jwt.config';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { TokenBlacklistService } from './libs/common/services/token-blacklist.service';
import { RedisModule } from './redis/redis.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ReviewSyncService } from './services/review-sync.service';
import { ReviewSyncController } from './controllers/review-sync.controller';
@Module({
  imports: [
    // MailModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, jwtConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database.users'),
        entities: [User, UserVocab, UserProgress, UserReviewHistory],
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User, UserVocab, UserProgress, UserReviewHistory]),
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
    ClientsModule.registerAsync([
      {
        name: 'USER_SERVICE',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => {
          const rabbitUrl = configService.get<string>('RABBITMQ_URL') || 'amqp://localhost:5672';
          return {
            transport: Transport.RMQ,
            options: {
              urls: [rabbitUrl],
              queue: 'user_queue',
              queueOptions: {
                durable: false,
              },
            },
          };
        },
        inject: [ConfigService],
      },
    ]),
    
    
  ],
  controllers: [AuthController, UserController, ReviewSyncController],
  providers: [AuthService, UserService, JwtStrategy, RolesGuard,TokenBlacklistService, ReviewSyncService],
})
export class UserModule {} 