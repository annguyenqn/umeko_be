import dataSourceSeed from '../dataSourceSeed';
import { In } from 'typeorm';
import { Vocabulary } from '../entities/Vocabulary.entity';
import { Kanji } from '../entities/Kanji.entity';
import { Lesson } from '../entities/Lesson.entity';
import { VocabExample } from '../entities/VocabExample.entity';
import { vocabMimikaraSeedN2Data } from './data/vocab-mimikara-n2';

async function seedVocabs(vocabs) {
  await dataSourceSeed.initialize();

  const vocabRepo = dataSourceSeed.getRepository(Vocabulary);
  const kanjiRepo = dataSourceSeed.getRepository(Kanji);
  const lessonRepo = dataSourceSeed.getRepository(Lesson);
  const exampleRepo = dataSourceSeed.getRepository(VocabExample);

  const failedVocabs = [];

  for (const vocabItem of vocabs) {
    console.log('Processing vocab:', JSON.stringify(vocabItem, null, 2));

    // Tìm bài học tương ứng (N2)
    const lesson = await lessonRepo.findOne({
      where: { lesson_number: vocabItem.lesson_number, level: 'N2' },
    });
    if (!lesson) {
      failedVocabs.push({
        vocab: vocabItem.vocab,
        reason: `Lesson with lesson_number ${vocabItem.lesson_number} not found`,
      });
      continue;
    }

    // Kiểm tra xem từ vựng đã tồn tại chưa
    let existingVocab = await vocabRepo.findOne({
      where: { vocab: vocabItem.vocab },
      relations: ['lessons', 'kanjis'], // Load quan hệ lessons và kanjis
    });

    // Nới lỏng kiểm tra: Nếu không chứa Kanji, coi như từ Hiragana/Katakana hợp lệ
    const kanjiList = vocabItem.vocab.replace(/[^一-龯]/g, '').split('');
    const hasKanji = kanjiList.length > 0;

    if (existingVocab) {
      // Nếu từ vựng đã tồn tại, cập nhật danh sách lessons
      if (!existingVocab.lessons.some((l) => l.lesson_number === lesson.lesson_number)) {
        existingVocab.lessons.push(lesson);
        try {
          await vocabRepo.save(existingVocab);
          console.log(`Đã cập nhật lesson ${lesson.lesson_number} cho từ '${vocabItem.vocab}'.`);
        } catch (error) {
          failedVocabs.push({
            vocab: vocabItem.vocab,
            reason: `Failed to update lessons: ${error.message}`,
          });
          continue;
        }
      } else {
        console.log(`Từ '${vocabItem.vocab}' đã có lesson ${lesson.lesson_number}, bỏ qua.`);
      }

      // Cập nhật examples nếu có
      if (vocabItem.examples && vocabItem.examples.length > 0) {
        const newExamples = vocabItem.examples.map((ex) =>
          exampleRepo.create({
            example_text: ex.example_text,
            furigana: ex.furigana,
            meaning_vi: ex.meaning_vi,
            meaning_en: ex.meaning_en || '',
            vocab: existingVocab,
          })
        );
        await exampleRepo.save(newExamples);
        console.log(`Đã thêm ${newExamples.length} ví dụ cho từ '${vocabItem.vocab}'.`);
      }
      continue;
    }

    // Nếu từ vựng chưa tồn tại, xử lý như từ mới
    let savedVocab;
    if (!hasKanji) {
      // Xử lý từ không chứa Kanji (Hiragana, Katakana, hoặc ký tự đặc biệt)
      const newVocab = vocabRepo.create({
        vocab: vocabItem.vocab,
        furigana: vocabItem.furigana,
        mean_vi: vocabItem.meaning_vi || vocabItem.mean_vi,
        mean_en: vocabItem.meaning_en || vocabItem.mean_en || '',
        image_link: vocabItem.image_link || '',
        sound_link: vocabItem.sound_link || '',
        word_type: vocabItem.word_type || '',
        lessons: [lesson],
      });

      try {
        savedVocab = await vocabRepo.save(newVocab);
      } catch (error) {
        failedVocabs.push({
          vocab: vocabItem.vocab,
          reason: `Failed to save: ${error.message}`,
        });
        continue;
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
      image_link: vocabItem.image_link || '',
      sound_link: vocabItem.sound_link || '',
      word_type: vocabItem.word_type || '',
      lessons: [lesson],
      kanjis: existingKanjis,
    });

    try {
      savedVocab = await vocabRepo.save(newVocab);
    } catch (error) {
      failedVocabs.push({
        vocab: vocabItem.vocab,
        reason: `Failed to save: ${error.message}`,
      });
      continue;
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
}

seedVocabs(vocabMimikaraSeedN2Data)
  .catch((err) => {
    console.error('❌ Failed to seed vocabs:', err);
    process.exit(1);
  })
  .finally(async () => {
    await dataSourceSeed.destroy();
  });

export default seedVocabs;