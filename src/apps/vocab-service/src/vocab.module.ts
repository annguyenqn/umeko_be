import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { VocabService } from './services/vocab.service';
import { VocabExample } from './entities/VocabExample.entity';
import { Vocabulary } from './entities/Vocabulary.entity';
import { Kanji } from './entities/Kanji.entity';
import { Lesson } from './entities/Lesson.entity';
import { KanjiExample } from './entities/KanjiExample.entity';
import { Category } from './entities/Category.entity';
import { databaseConfig } from '@/config/database.config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { VocabularyController } from './controllers/vocab.controller';
import { CustomVocabService } from './vocab-custom/service/custom-vocab.service';
import { CustomVocabController } from './vocab-custom/controller/custom-vocab.controller';
import { CustomVocabSet } from './entities/CustomVocabSet.entity';
import { CustomVocabEntry } from './entities/CustomVocabEntry.entity';


@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database.vocab'),
        entities: [VocabExample, Vocabulary, Kanji, Lesson, KanjiExample, Category, CustomVocabEntry, CustomVocabSet],
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([VocabExample, Vocabulary, Kanji, Lesson, KanjiExample, Category, CustomVocabSet, CustomVocabEntry]),
    ClientsModule.register([
      {
        name: 'VOCAB_SERVICE', // Tên service của bạn
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'], // Địa chỉ của RabbitMQ
          queue: 'vocab_queue', // Tên của queue
          queueOptions: {
            durable: false, // Tùy chọn cho queue
          },
        },
      },
    ]),
  ],
  controllers: [VocabularyController, CustomVocabController],
  providers: [VocabService, CustomVocabService],
  exports: [VocabService],
})
export class VocabModule {}
