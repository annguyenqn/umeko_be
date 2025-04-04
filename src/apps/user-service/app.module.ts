import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@src/redis/redis.module'; 
import { redisConfig } from '@src/libs/config/redis.config';
import { UserModule } from './user.module'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [redisConfig],
    }),
    RedisModule,
    UserModule, 
  ],
})
export class AppModule {}
