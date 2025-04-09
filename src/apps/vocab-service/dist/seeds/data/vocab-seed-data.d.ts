interface VocabExampleSeed {
    example_text: string;
    meaning_vi: string;
    meaning_en: string;
    furigana: string;
}
interface VocabSeedData {
    vocab: string;
    furigana?: string;
    meaning_vi: string;
    meaning_en: string;
    image_link?: string;
    sound_link?: string;
    word_type?: string;
    level?: string;
    lesson_number: number;
    examples?: VocabExampleSeed[];
    kanji_list?: string[];
}
export declare const vocabSeedData: VocabSeedData[];
export {};
