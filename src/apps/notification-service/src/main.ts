import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';
import { NotificationExceptionFilter } from './common/filters/notification-exception.filter';
import { RpcExceptionFilter } from './common/filters/rpc-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  app.useGlobalFilters(
    new NotificationExceptionFilter(),
    new RpcExceptionFilter(),  
  );
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'notification_queue',
      queueOptions: { durable: false },
    },
  });
  

  await app.startAllMicroservices();
  const config = new DocumentBuilder()
    .setTitle('Notification Service')
    .setDescription('API cho hệ thống Notification')
    .setVersion('1.0')
    .addTag('Notification')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/notification', app, document); 

  await app.listen(8084);
}
bootstrap();
