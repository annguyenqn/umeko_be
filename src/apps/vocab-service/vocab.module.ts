// src/apps/vocab-service/vocab.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VocabService } from './services/vocab.service';
import { VocabController } from './controllers/vocab.controller';
import { VocabExample } from './entities/vocabExample.entity';
import { Vocabulary } from './entities/Vocabulary.entity';
import { Lesson } from './entities/Lesson.entity';
import { KanjiExample } from './entities/KanjiExample.entity';
import { Kanji } from './entities/Kanji.entity';
import { Category } from './entities/Category.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Vocabulary, VocabExample, Lesson, KanjiExample, Kanji, Category]),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'youruser',
        password: 'yourpass',
        database: 'yourdb',
        entities: [__dirname + '/**/*.entity.{ts,js}'],
        synchronize: true,
      }),
    }),
  ],
  controllers: [VocabController],
  providers: [VocabService],
})
export class VocabModule {}
