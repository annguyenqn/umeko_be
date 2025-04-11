import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'spaced_repetition_queue',
      queueOptions: { durable: false },
    },
  });
  
  await app.startAllMicroservices();
  const config = new DocumentBuilder()
    .setTitle('Spaced Repetition Service')
    .setDescription('API cho hệ thống ôn từ vựng sử dụng thuật toán Spaced Repetition')
    .setVersion('1.0')
    .addTag('reviews')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/review', app, document); 

  await app.listen(8082);
}
bootstrap();
