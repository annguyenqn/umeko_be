import { VocabExample } from './VocabExample.entity';
import { Lesson } from './Lesson.entity';
import { Kanji } from './Kanji.entity';
export declare class Vocabulary {
    id: string;
    vocab: string;
    furigana: string;
    mean_vi: string;
    mean_en: string;
    image_link: string;
    sound_link: string;
    word_type: string;
    examples: VocabExample[];
    lessons: Lesson[];
    kanjis: Kanji[];
}
