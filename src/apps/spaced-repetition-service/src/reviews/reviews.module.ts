import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewService } from './reviews.service';
import { ReviewController } from './reviews.controller';
import { Review, ReviewSchema } from './schemas/review.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),

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
    ]),
  ],
  providers: [ReviewService],
  controllers: [ReviewController],
})
export class ReviewsModule {}
