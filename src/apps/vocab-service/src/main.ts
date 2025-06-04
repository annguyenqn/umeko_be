import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { VocabModule } from './vocab.module';
import helmet from 'helmet';
import { RpcExceptionFilter } from './common/filters/rpc-exception.filter';

async function bootstrap() {
  // Khởi tạo app HTTP
  const app = await NestFactory.create(VocabModule);

  // Khởi tạo Microservice (RabbitMQ)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
      queue: 'vocab_queue',
      queueOptions: { durable: false },
    },
  });

  // Global Filters
  app.useGlobalFilters(new RpcExceptionFilter());

  // Global Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Helmet security (tùy chọn bật lại)
  // app.use(helmet({ crossOriginEmbedderPolicy: false }));

  // CORS
  app.enableCors();

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Vocab API')
    .setDescription('Public API for vocabulary management')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/vocab', app, document);

  // Khởi động microservice và HTTP cùng lúc
  await app.startAllMicroservices();
  const port = process.env.APP_PORT || 8081;
  await app.listen(port);

  console.log(`🚀 HTTP Server is running at http://localhost:${port}`);
  console.log(`📘 Swagger available at http://localhost:${port}/api/vocab`);
  console.log('✅ RabbitMQ Microservice is listening');
}

bootstrap();
