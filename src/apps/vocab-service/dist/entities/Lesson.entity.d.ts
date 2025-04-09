import { Category } from './Category.entity';
import { Vocabulary } from './Vocabulary.entity';
export declare class Lesson {
    id: string;
    lesson_number: number;
    level: string;
    description_vi: string;
    description_en: string;
    category: Category;
    vocabularies: Vocabulary[];
}
