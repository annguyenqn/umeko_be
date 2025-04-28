import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vocabulary } from '../entities/Vocabulary.entity';
import { In, Repository } from 'typeorm';
import { Lesson } from '../entities/Lesson.entity';
import { Category } from '../entities/Category.entity';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { validate as isUUIDValid } from 'uuid'; 
@Injectable()
export class VocabService {
  constructor(
    @InjectRepository(Vocabulary)
    private readonly vocabRepo: Repository<Vocabulary>,
    @InjectRepository(Lesson)
    private readonly lessonRepo: Repository<Lesson>,
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
    @Inject('VOCAB_SERVICE') private readonly vocabClient: ClientProxy, 
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
  async getManyByIds(ids: string[]) {
    try {
      if (!ids || ids.length === 0) {
        console.log('No IDs provided');
        throw new RpcException({
          message: 'No IDs provided for the vocabulary lookup.',
          error: 'BAD_REQUEST',
          statusCode: 400,
        });
      }
      for (let id of ids) {
        if (!isUUIDValid(id)) {
          console.log(`Invalid UUID format for ID: ${id}`);
          throw new RpcException({
            message: `Invalid UUID format for ID: ${id}`,
            error: 'BAD_REQUEST',
            statusCode: 400,
          });
        }
      }
      // Tìm từ vựng theo nhiều ID
      const vocabularies = await this.vocabRepo.find({
        where: { id: In(ids) },
        relations: ['kanjis'],
      });
      
  
      // Kiểm tra nếu không có vocab nào được tìm thấy
      if (vocabularies.length === 0) {
        console.log(`No vocabularies found for IDs: ${ids.join(', ')}`);
        return [];  // Trả về danh sách rỗng thay vì ném RpcException
      }
  
      return vocabularies;
    } catch (error) {
      console.error(`Error in getManyByIds:`, error);
  
      // Kiểm tra nếu lỗi là RpcException thì ném lại
      if (error instanceof RpcException) {
        throw error;  // Ném lại RpcException
      }
  
      // Ném lỗi bất ngờ với thông điệp mặc định
      throw new RpcException({
        message: 'An unexpected error occurred while retrieving vocabularies.',
        error: 'Internal Server Error',
        statusCode: 500,
      });
    }
  }
  
}
