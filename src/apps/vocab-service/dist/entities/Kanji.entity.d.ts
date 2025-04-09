import { KanjiExample } from './KanjiExample.entity';
import { Vocabulary } from './Vocabulary.entity';
export declare class Kanji {
    id: string;
    kanji: string;
    han_viet: string;
    radicals: string;
    strokes: number;
    meaning_vi: string;
    meaning_en: string;
    on_reading: string[];
    kun_reading: string[];
    level: string;
    examples: KanjiExample[];
    vocabularies: Vocabulary[];
}
