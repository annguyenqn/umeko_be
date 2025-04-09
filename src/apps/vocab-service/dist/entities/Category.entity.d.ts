import { Lesson } from './Lesson.entity';
export declare class Category {
    id: string;
    name: string;
    description_vi: string;
    description_en: string;
    lessons: Lesson[];
}
