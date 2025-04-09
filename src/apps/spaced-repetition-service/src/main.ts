import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
