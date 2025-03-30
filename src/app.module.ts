import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { RedisModule } from './redis/redis.module';
import { databaseConfig } from './libs/config/database.config';
import { redisConfig } from './libs/config/redis.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [redisConfig, databaseConfig],
    }),
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
