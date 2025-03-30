import { Injectable } from '@nestjs/common';
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

  async getVocabByLesson(lessonNumber: number): Promise<Vocabulary[]> {
    const lesson = await this.lessonRepo.findOne({
      where: { lesson_number: lessonNumber },
      relations: ['vocabularies', 'vocabularies.kanjis', 'vocabularies.examples'],
    });

    if (!lesson) {
      throw new Error(`Lesson with number ${lessonNumber} not found`);
    }

    return lesson.vocabularies;
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
