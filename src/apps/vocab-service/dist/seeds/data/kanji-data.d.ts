export interface KanjiExampleSeed {
    example_text: string;
    meaning_vi: string;
    meaning_en: string;
    furigana: string;
}
export interface KanjiSeedData {
    kanji: string;
    han_viet: string;
    radicals?: string;
    strokes: number;
    meaning_vi: string;
    meaning_en: string;
    on_reading: string[];
    kun_reading: string[];
    level: string;
    examples?: KanjiExampleSeed[];
}
export declare const kanjiSeedData: KanjiSeedData[];
