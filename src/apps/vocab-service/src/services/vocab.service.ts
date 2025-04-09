import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vocabulary } from '../entities/Vocabulary.entity';
import { Repository } from 'typeorm';
import { Lesson } from '../entities/Lesson.entity';
import { Category } from '../entities/Category.entity';
@Injectable()
export class VocabService {
  constructor(
    @InjectRepository(Vocabulary)
    private readonly vocabRepo: Repository<Vocabulary>,
    @InjectRepository(Lesson)
    private readonly lessonRepo: Repository<Lesson>,
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,

  ) {}

  async getVocabByLesson(lessonNumber: number, categoryId: string): Promise<Vocabulary[]> {
    try {
      // Kiểm tra xem category có tồn tại không
      const categoryExists = await this.categoryRepo.findOne({ where: { id: categoryId } });
      if (!categoryExists) {
        throw new NotFoundException(`Category with ID ${categoryId} not found.`);
      }

      // Kiểm tra xem lesson có tồn tại trong category không
      const lesson = await this.lessonRepo.findOne({
        where: { lesson_number: lessonNumber, category: { id: categoryId } },
        relations: ['vocabularies', 'vocabularies.kanjis', 'vocabularies.examples'],
      });

      if (!lesson) {
        throw new NotFoundException(`Lesson number ${lessonNumber} does not exist in category ID ${categoryId}.`);
      }

      return lesson.vocabularies;
    } catch (error) {
      console.error(`Error in getVocabByLesson:`, error);

      if (error instanceof NotFoundException) {
        throw error; // Ném lại lỗi để controller xử lý
      }

      throw new InternalServerErrorException('An unexpected error occurred while retrieving vocabularies.');
    }
  }
  
  

  async getAllCategories(): Promise<Category[]> {
    return this.categoryRepo.find();
  }

  async getLessonsByCategory(categoryId: string): Promise<Lesson[]> {
    return this.lessonRepo.find({
      where: { category: { id: categoryId } },
      relations: ['category'],
    });
  }
}
