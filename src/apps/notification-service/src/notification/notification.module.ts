import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { Notification , NotificationSchema } from './schemas/notification.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NotificationGateway } from './notification.gateway';
// import { NotificationListener } from './notification.listener';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forFeature([{ name: Notification.name, schema: NotificationSchema }]),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://umeko:umeko_password@localhost:27017/umeko_spaced_repetition?authSource=admin'),
    ClientsModule.registerAsync([
      {
        name: 'NOTIFICATION_SERVICE',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => {
          const rabbitUrl = configService.get<string>('RABBITMQ_URL') || 'amqp://localhost:5672';
          return {
            transport: Transport.RMQ,
            options: {
              urls: [rabbitUrl],
              queue: 'notification_queue',
              queueOptions: { durable: false }, 
            },
          };
        },
        inject: [ConfigService],
      },
      {
        name: 'USER_SERVICE',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => {
          const rabbitUrl = configService.get<string>('RABBITMQ_URL') || 'amqp://localhost:5672';
          return {
            transport: Transport.RMQ,
            options: {
              urls: [rabbitUrl],
              queue: 'user_queue',
              queueOptions: { durable: false },
            },
          };
        },
        inject: [ConfigService],
      },
      {
        name: 'VOCAB_SERVICE',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => {
          const rabbitUrl = configService.get<string>('RABBITMQ_URL') || 'amqp://localhost:5672';
          return {
            transport: Transport.RMQ,
            options: {
              urls: [rabbitUrl],
              queue: 'vocab_queue',
              queueOptions: { durable: false },
            },
          };
        },
        inject: [ConfigService],
      },
      {
        name: 'SPACED_REPETITION_SERVICE',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => {
          const rabbitUrl = configService.get<string>('RABBITMQ_URL') || 'amqp://localhost:5672';
          return {
            transport: Transport.RMQ,
            options: {
              urls: [rabbitUrl],
              queue: 'spaced_repetition_queue',
              queueOptions: { durable: false }, 
            },
          };
        },
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [NotificationService, NotificationGateway],
  controllers: [NotificationController],
  exports: [NotificationGateway], 
})
export class NotificationModule {
  //   constructor(private readonly listener: NotificationListener) {
  //   console.log('🔁 NotificationModule loaded - Listener initialized');
  // }
}
