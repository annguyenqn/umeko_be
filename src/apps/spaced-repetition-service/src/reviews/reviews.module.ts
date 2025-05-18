import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewService } from './reviews.service';
import { ReviewController } from './reviews.controller';
import { Review, ReviewSchema } from './schemas/review.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ReviewScheduler } from './review.scheduler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://umeko:umeko_password@localhost:27017/umeko_spaced_repetition?authSource=admin'),
    ClientsModule.registerAsync([
      {
        name: 'SPACED_REPETITION_SERVICE',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => {
          const rabbitUrl = configService.get<string>('RABBITMQ_URL') || 'amqp://localhost:5672';
          return {
            transport: Transport.RMQ,
            options: {
              urls: [rabbitUrl],
              queue: 'spaced_repetition_queue',
              queueOptions: { durable: false }, 
            },
          };
        },
        inject: [ConfigService],
      },
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
              queueOptions: { durable: false },
            },
          };
        },
        inject: [ConfigService],
      },
      {
        name: 'VOCAB_SERVICE',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => {
          const rabbitUrl = configService.get<string>('RABBITMQ_URL') || 'amqp://localhost:5672';
          return {
            transport: Transport.RMQ,
            options: {
              urls: [rabbitUrl],
              queue: 'vocab_queue',
              queueOptions: { durable: false },
            },
          };
        },
        inject: [ConfigService],
      },
      {
  name: 'NOTIFICATION_SERVICE',
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => {
    const rabbitUrl = configService.get<string>('RABBITMQ_URL') || 'amqp://localhost:5672';
    return {
      transport: Transport.RMQ,
      options: {
        urls: [rabbitUrl],
        queue: 'notification_queue', 
        queueOptions: { durable: false },
      },
    };
  },
  inject: [ConfigService],
}
    ]),
    
  ],
  providers: [ReviewService, ReviewScheduler],
  controllers: [ReviewController],
})
export class ReviewsModule {}
