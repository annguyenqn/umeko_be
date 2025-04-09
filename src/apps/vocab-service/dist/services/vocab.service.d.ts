import { Vocabulary } from '../entities/Vocabulary.entity';
import { Repository } from 'typeorm';
import { Lesson } from '../entities/Lesson.entity';
import { Category } from '../entities/Category.entity';
export declare class VocabService {
    private readonly vocabRepo;
    private readonly lessonRepo;
    private readonly categoryRepo;
    constructor(vocabRepo: Repository<Vocabulary>, lessonRepo: Repository<Lesson>, categoryRepo: Repository<Category>);
    getVocabByLesson(lessonNumber: number, categoryId: string): Promise<Vocabulary[]>;
    getAllCategories(): Promise<Category[]>;
    getLessonsByCategory(categoryId: string): Promise<Lesson[]>;
}
