import dataSourceSeed from '../dataSourceSeed';
import { In } from 'typeorm';
import { Vocabulary } from '../entities/Vocabulary.entity';
import { Kanji } from '../entities/Kanji.entity';
import { Lesson } from '../entities/Lesson.entity';
import { VocabExample } from '../entities/VocabExample.entity';
import { vocabSeedData } from './data/vocab-seed-data';

async function seedVocabs(vocabs) {
  await dataSourceSeed.initialize();

  const vocabRepo = dataSourceSeed.getRepository(Vocabulary);
  const kanjiRepo = dataSourceSeed.getRepository(Kanji);
  const lessonRepo = dataSourceSeed.getRepository(Lesson);
  const exampleRepo = dataSourceSeed.getRepository(VocabExample);

  const existingVocabs = await vocabRepo.find({ select: ['vocab', 'id'] });
  const existingVocabSet = new Map(existingVocabs.map((v) => [v.vocab, v.id]));
  const newVocabs = vocabs.filter((v) => !existingVocabSet.has(v.vocab));
  console.log(`🔍 Found ${newVocabs.length} new vocabs to insert.`);

  const failedVocabs = [];
  const skippedVocabs = [];

  for (const vocabItem of newVocabs) {
    console.log('Processing vocab:', JSON.stringify(vocabItem, null, 2));

    // Nới lỏng kiểm tra: Nếu không chứa Kanji, coi như từ Hiragana/Katakana hợp lệ
    const kanjiList = vocabItem.vocab.replace(/[^一-龯]/g, '').split('');
    const hasKanji = kanjiList.length > 0;

    const lesson = await lessonRepo.findOne({ where: { lesson_number: vocabItem.lesson_number } });
    if (!lesson) {
      failedVocabs.push({
        vocab: vocabItem.vocab,
        reason: `Lesson with lesson_number ${vocabItem.lesson_number} not found`,
      });
      continue;
    }

    let savedVocab;
    if (!hasKanji) {
      // Xử lý từ không chứa Kanji (Hiragana, Katakana, hoặc ký tự đặc biệt)
      const newVocab = vocabRepo.create({
        vocab: vocabItem.vocab,
        furigana: vocabItem.furigana,
        mean_vi: vocabItem.meaning_vi || vocabItem.mean_vi,
        mean_en: vocabItem.meaning_en || vocabItem.mean_en || '',
        lessons: [lesson],
      });

      try {
        savedVocab = await vocabRepo.save(newVocab);
      } catch (error) {
        if (error.code === '23505') {
          skippedVocabs.push({
            vocab: vocabItem.vocab,
            reason: 'Duplicate key, skipped to keep existing record',
          });
          continue;
        }
        throw error;
      }

      if (vocabItem.examples && vocabItem.examples.length > 0) {
        const examples = vocabItem.examples.map((ex) =>
          exampleRepo.create({
            example_text: ex.example_text,
            furigana: ex.furigana,
            meaning_vi: ex.meaning_vi,
            meaning_en: ex.meaning_en || '',
            vocab: savedVocab,
          })
        );
        await exampleRepo.save(examples);
      }
      console.log(`Từ vựng '${vocabItem.vocab}' (không chứa Kanji) đã được seed thành công.`);
      continue;
    }

    // Xử lý từ chứa Kanji
    const existingKanjis = await kanjiRepo.find({ where: { kanji: In(kanjiList) } });
    if (existingKanjis.length !== kanjiList.length) {
      const missingKanjis = kanjiList.filter((k) => !existingKanjis.some((ek) => ek.kanji === k));
      failedVocabs.push({
        vocab: vocabItem.vocab,
        reason: `Missing Kanji(s): ${missingKanjis.join(', ')}`,
      });
      continue;
    }

    const newVocab = vocabRepo.create({
      vocab: vocabItem.vocab,
      furigana: vocabItem.furigana,
      mean_vi: vocabItem.meaning_vi || vocabItem.mean_vi,
      mean_en: vocabItem.meaning_en || vocabItem.mean_en || '',
      lessons: [lesson],
      kanjis: existingKanjis,
    });

    try {
      savedVocab = await vocabRepo.save(newVocab);
    } catch (error) {
      if (error.code === '23505') {
        skippedVocabs.push({
          vocab: vocabItem.vocab,
          reason: 'Duplicate key, skipped to keep existing record',
        });
        continue;
      }
      throw error;
    }

    if (vocabItem.examples && vocabItem.examples.length > 0) {
      const examples = vocabItem.examples.map((ex) =>
        exampleRepo.create({
          example_text: ex.example_text,
          furigana: ex.furigana,
          meaning_vi: ex.meaning_vi,
          meaning_en: ex.meaning_en || '',
          vocab: savedVocab,
        })
      );
      await exampleRepo.save(examples);
    }

    console.log(
      `Từ vựng '${vocabItem.vocab}' đã được seed thành công với Kanji: ${existingKanjis
        .map((k) => k.kanji)
        .join(', ')} và Lesson: ${lesson.lesson_number}`
    );
  }

  if (failedVocabs.length > 0) {
    console.log('⚠️ Các từ vựng không seed được:');
    failedVocabs.forEach((fv) => console.log(`- ${fv.vocab}: ${fv.reason}`));
  }

  if (skippedVocabs.length > 0) {
    console.log('ℹ️ Các từ vựng bị bỏ qua do trùng lặp:');
    skippedVocabs.forEach((sv) => console.log(`- ${sv.vocab}: ${sv.reason}`));
  }
}

seedVocabs(vocabSeedData)
  .catch((err) => {
    console.error('❌ Failed to seed vocabs:', err);
    process.exit(1);
  })
  .finally(async () => {
    await dataSourceSeed.destroy();
  });

export default seedVocabs;