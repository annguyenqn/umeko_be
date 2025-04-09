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
    lesson_number: number;
    examples?: VocabExampleSeed[];
    kanji_list?: string[];
}
export declare const vocabMimikaraSeedN2Data: VocabSeedData[];
export {};
