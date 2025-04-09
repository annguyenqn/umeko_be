import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '../user-service/src/redis/redis.module';
import { databaseConfig } from './config/database.config';
import { redisConfig } from '../user-service/src/libs/config/redis.config';
import { VocabModule } from './vocab.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, redisConfig],
    }),
    RedisModule,
    VocabModule,
  ],
})
export class AppModule {}
