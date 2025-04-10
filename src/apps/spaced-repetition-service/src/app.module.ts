import { Module } from '@nestjs/common';
import { ReviewsModule } from './reviews/reviews.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ReviewService } from './reviews/reviews.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
const rmqUrl = process.env.RABBITMQ_URL || 'amqp://localhost:5672';
@Module({
  imports: [
    ReviewsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://umeko:umeko_password@localhost:27017/umeko_spaced_repetition?authSource=admin'),
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [rmqUrl],
          queue: process.env.RABBITMQ_QUEUE_USER || 'user_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ])
  ],
  providers: [ReviewService],
})
export class AppModule {}
