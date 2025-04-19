import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UserModule } from './user.module';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { Transport } from '@nestjs/microservices';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { RpcExceptionFilter } from './common/filters/rpc-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  
  // Configure CORS
  app.enableCors({
    origin:  '*', // or specify your frontend URL like 'http://localhost:3000'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.useGlobalFilters(
    new HttpExceptionFilter(),
    new RpcExceptionFilter(),  
  );

  // Configure Helmet with less restrictive CSP
  // app.use(
  //   helmet({
  //     contentSecurityPolicy: {
  //       directives: {
  //         defaultSrc: [`'self'`],
  //         styleSrc: [`'self'`, `'unsafe-inline'`, 'https:'],
  //         imgSrc: [`'self'`, 'data:', 'https:'],
  //         scriptSrc: [`'self'`, `'unsafe-inline'`, `'unsafe-eval'`],
  //       },
  //     },
  //     crossOriginEmbedderPolicy: false,
  //   })
  // );

  // Global pipes
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Umeko API')
    .setDescription('The Umeko API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Authentication')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/user', app, document);

  const port = process.env.APP_PORT || 8080;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation is available at: http://localhost:${port}/api/user`);
}
bootstrap();
