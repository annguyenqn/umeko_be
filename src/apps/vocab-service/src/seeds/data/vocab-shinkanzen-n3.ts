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
    lesson_number: number; // để tự liên kết lesson
    examples?: VocabExampleSeed[];
    kanji_list?: string[]; // nếu có kanji liên kết thủ công
  }

    export const vocabSeedN3Data: VocabSeedData[] = 
    [
      {
        "vocab": "男性",
        "furigana": "だんせい",
        "meaning_vi": "nam giới, đàn ông, giới tính nam",
        "meaning_en": "Men, men, male gender",
        "examples": [
          {
            "example_text": "理想の　{男性／女性}　と結婚する",
            "furigana": "理想（りそう）だんせいじょせいけっこんする",
            "meaning_vi": "Kết hôn với người đàn ông/ phụ nữ lý tưởng.",
            "meaning_en": "Marry your ideal {male/female}"
          }
        ],
        "lesson_number": 1
      },
    ]