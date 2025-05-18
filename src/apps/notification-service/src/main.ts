// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { NotificationExceptionFilter } from './common/filters/notification-exception.filter';
import { RpcExceptionFilter } from './common/filters/rpc-exception.filter';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  // Khởi tạo ứng dụng chính (HTTP)
  const app = await NestFactory.create(AppModule);

  // Gắn Global Exception Filters
  app.useGlobalFilters(
    new NotificationExceptionFilter(),
    new RpcExceptionFilter(),
  );

  // Kết nối Microservice (RabbitMQ)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL || 'amqp://umeko:umeko_password@localhost:5672'],
      queue: 'notification_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  // Bắt đầu lắng nghe RabbitMQ
  await app.startAllMicroservices();
  console.log('✅ Microservice is listening on RabbitMQ queue');

  // Swagger Setup
  const config = new DocumentBuilder()
    .setTitle('Notification Service')
    .setDescription('API cho hệ thống Notification')
    .setVersion('1.0')
    .addTag('Notification')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/notification', app, document);

  // Khởi động HTTP API
  await app.listen(8084);
  console.log('🚀 HTTP server is running on http://localhost:8084');
}

bootstrap();
