import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { VocabModule } from './vocab.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(VocabModule, {
        transport: Transport.RMQ,
        options: {
            urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
            queue: 'vocab_queue',
            queueOptions: { durable: false },
        },
    });

    await app.listen();
    console.log('✅ Microservice (RabbitMQ) is now listening');
}
bootstrap();
