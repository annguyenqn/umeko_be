import { RmqOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
dotenv.config();

export const getRmqOptions = (queue: string): RmqOptions => {
    const url = process.env.RABBITMQ_URL || 'amqp://localhost:5672';
    return {
      transport: Transport.RMQ,
      options: {
        urls: [url],
        queue,
        queueOptions: {
          durable: true,
        },
      },
    };
  };
  