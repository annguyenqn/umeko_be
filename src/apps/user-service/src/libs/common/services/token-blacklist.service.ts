import { Inject, Injectable } from '@nestjs/common'
import Redis from 'ioredis'

@Injectable()
export class TokenBlacklistService {
  constructor(@Inject('REDIS_CLIENT') private readonly redis: Redis) {}

  async blacklistToken(token: string, expiresIn: number): Promise<void> {
    await this.redis.set(`blacklist:${token}`, '1', 'EX', expiresIn)
  }

  async isBlacklisted(token: string): Promise<boolean> {
    const result = await this.redis.get(`blacklist:${token}`)
    return result === '1'
  }
}
