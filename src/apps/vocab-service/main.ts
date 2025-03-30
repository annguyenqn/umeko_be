// src/apps/vocab-service/main.ts
import { NestFactory } from '@nestjs/core';
import { VocabModule } from './vocab.module';

async function bootstrap() {
  const app = await NestFactory.create(VocabModule);
  app.enableCors();
  await app.listen(process.env.APP_PORT || 8081);
  console.log(`🚀 Vocab Service is running on http://localhost:${process.env.APP_PORT || 8081}`);
}
bootstrap();
