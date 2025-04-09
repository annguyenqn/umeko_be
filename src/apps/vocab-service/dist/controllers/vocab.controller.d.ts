import { VocabService } from '@/services/vocab.service';
import { Vocabulary } from '@/entities/Vocabulary.entity';
import { Category } from '@/entities/Category.entity';
import { Lesson } from '@/entities/Lesson.entity';
export declare class VocabularyController {
    private readonly vocabularyService;
    constructor(vocabularyService: VocabService);
    getVocabByLesson(lessonNumber: number, categoryId: string): Promise<Vocabulary[]>;
    getAllCategories(): Promise<Category[]>;
    getLessonsByCategory(categoryId: string): Promise<Lesson[]>;
}
