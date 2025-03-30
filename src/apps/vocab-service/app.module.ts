import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@src/redis/redis.module';
import { databaseConfig } from '@src/libs/config/database.config';
import { redisConfig } from '@src/libs/config/redis.config';
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
