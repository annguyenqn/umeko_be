// src/main.ts
import { NestFactory } from '@nestjs/core';
import { ReviewsModule } from './reviews/reviews.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { SpacedRepetitionExceptionFilter } from './common/filters/spaced-repetition-exception.filter';
import { RpcExceptionFilter } from './common/filters/rpc-exception.filter';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  // Tạo app HTTP
  const app = await NestFactory.create(ReviewsModule);

  // Gắn Global Filters
  app.useGlobalFilters(
    new SpacedRepetitionExceptionFilter(),
    new RpcExceptionFilter(),
  );

  // Kết nối microservice (RabbitMQ)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL || 'amqp://umeko:umeko_password@localhost:5672'],
      queue: 'spaced_repetition_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.startAllMicroservices();
  console.log('✅ [SpacedRepetitionService] Microservice is listening on RabbitMQ queue');

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Spaced Repetition Service')
    .setDescription('API cho hệ thống ôn từ vựng sử dụng thuật toán Spaced Repetition')
    .setVersion('1.0')
    .addTag('reviews')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/review', app, document);

  // Khởi chạy HTTP Server
  await app.listen(8082);
  console.log('🚀 HTTP server is running on http://localhost:8082');
}

bootstrap();
