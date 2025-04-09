import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewService } from './reviews.service';
import { ReviewController } from './reviews.controller';
import { Review, ReviewSchema } from './schemas/review.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'user_queue',
          queueOptions: { durable: false },
        },
      },
      {
        name: 'VOCAB_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'vocab_queue',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  providers: [ReviewService],
  controllers: [ReviewController]
})
export class ReviewsModule {}
