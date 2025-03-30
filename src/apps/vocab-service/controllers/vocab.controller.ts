import { Controller, Get, Param } from '@nestjs/common';
import { VocabService } from '../services/vocab.service';
import { Vocabulary } from '../entities/Vocabulary.entity';
import { Category } from '../entities/Category.entity';
import { Lesson } from '../entities/Lesson.entity';
@Controller('vocabularies')
export class VocabularyController {
  constructor(private readonly vocabularyService: VocabService) {}

  @Get('lesson/:lessonNumber')
  async getVocabByLesson(@Param('lessonNumber') lessonNumber: number): Promise<Vocabulary[]> {
    return this.vocabularyService.getVocabByLesson(Number(lessonNumber));
  }

  @Get('categories')
  async getAllCategories(): Promise<Category[]> {
    return this.vocabularyService.getAllCategories();
  }

  @Get('category/:categoryId/lessons')
  async getLessonsByCategory(@Param('categoryId') categoryId: string): Promise<Lesson[]> {
    return this.vocabularyService.getLessonsByCategory(categoryId);
  }
}