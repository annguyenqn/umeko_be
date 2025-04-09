import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { VocabService } from './services/vocab.service';
import { VocabularyController } from './controllers/vocab.controller';
import { VocabExample } from './entities/VocabExample.entity';
import { Vocabulary } from './entities/Vocabulary.entity';
import { Kanji } from './entities/Kanji.entity';
import { Lesson } from './entities/Lesson.entity';
import { KanjiExample } from './entities/KanjiExample.entity';
import { Category } from './entities/Category.entity';
import { databaseConfig } from '../user-service/src/libs/config/database.config';

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
        entities: [VocabExample, Vocabulary, Kanji, Lesson, KanjiExample, Category],
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([VocabExample, Vocabulary, Kanji, Lesson, KanjiExample, Category]),
  ],
  controllers: [VocabularyController],
  providers: [VocabService],
  exports: [VocabService],
})
export class VocabModule {}
