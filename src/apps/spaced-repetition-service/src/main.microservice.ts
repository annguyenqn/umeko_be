import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ReviewsModule } from './reviews/reviews.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ReviewsModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL || 'amqp://umeko:umeko_password@localhost:5672'],
      queue: 'spaced_repetition_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen();
  console.log('✅ [SpacedRepetitionService] is listening on RabbitMQ queue');
}
bootstrap();
