import { BadRequestException, Controller, Get, Param, Query, UseInterceptors  } from '@nestjs/common';
import { VocabService } from '@/services/vocab.service';
import { Vocabulary } from '@/entities/Vocabulary.entity';
import { Category } from '@/entities/Category.entity';
import { Lesson } from '@/entities/Lesson.entity';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VocabInterceptor } from '@/common/interceptor/vocab.interceptor';
@Controller('vocabularies')
// @UseInterceptors(VocabInterceptor) 
export class VocabularyController {
  constructor(private readonly vocabularyService: VocabService) {}

  @Get('lesson/:lessonNumber')
  async getVocabByLesson(
    @Param('lessonNumber') lessonNumber: number,
    @Query('categoryId') categoryId: string
  ): Promise<Vocabulary[]> {
    if (!categoryId) {
      throw new BadRequestException('Category ID is required');
    }

    return this.vocabularyService.getVocabByLesson(Number(lessonNumber), categoryId);
  }

  @Get('categories')
  async getAllCategories(): Promise<Category[]> {
    return this.vocabularyService.getAllCategories();
  }

  @Get('category/:categoryId/lessons')
  async getLessonsByCategory(@Param('categoryId') categoryId: string): Promise<Lesson[]> {
    return this.vocabularyService.getLessonsByCategory(categoryId);
  }

  @MessagePattern('vocab.getManyByIds')
  async handleGetManyByIds(@Payload() ids: string[]) {
    return this.vocabularyService.getManyByIds(ids);
  }

  // @MessagePattern('vocab.getManyByIds')
  // async getManyByIds(vocabIds: string[]) {
  //   return this.vocabularyService.getManyByIds(vocabIds); 
  // }
}