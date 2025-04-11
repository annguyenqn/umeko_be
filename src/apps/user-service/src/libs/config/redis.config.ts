import { registerAs } from '@nestjs/config'

export const redisConfig = registerAs('redis', () => ({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || 'localhost', 10) || 6379,
}))
