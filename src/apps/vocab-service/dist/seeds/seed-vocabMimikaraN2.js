"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataSourceSeed_1 = require("../dataSourceSeed");
const typeorm_1 = require("typeorm");
const Vocabulary_entity_1 = require("../entities/Vocabulary.entity");
const Kanji_entity_1 = require("../entities/Kanji.entity");
const Lesson_entity_1 = require("../entities/Lesson.entity");
const VocabExample_entity_1 = require("../entities/VocabExample.entity");
const vocab_mimikara_n2_1 = require("./data/vocab-mimikara-n2");
async function seedVocabs(vocabs) {
    await dataSourceSeed_1.default.initialize();
    const vocabRepo = dataSourceSeed_1.default.getRepository(Vocabulary_entity_1.Vocabulary);
    const kanjiRepo = dataSourceSeed_1.default.getRepository(Kanji_entity_1.Kanji);
    const lessonRepo = dataSourceSeed_1.default.getRepository(Lesson_entity_1.Lesson);
    const exampleRepo = dataSourceSeed_1.default.getRepository(VocabExample_entity_1.VocabExample);
    const failedVocabs = [];
    for (const vocabItem of vocabs) {
        console.log('Processing vocab:', JSON.stringify(vocabItem, null, 2));
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
        let existingVocab = await vocabRepo.findOne({
            where: { vocab: vocabItem.vocab },
            relations: ['lessons', 'kanjis'],
        });
        const kanjiList = vocabItem.vocab.replace(/[^一-龯]/g, '').split('');
        const hasKanji = kanjiList.length > 0;
        if (existingVocab) {
            if (!existingVocab.lessons.some((l) => l.lesson_number === lesson.lesson_number)) {
                existingVocab.lessons.push(lesson);
                try {
                    await vocabRepo.save(existingVocab);
                    console.log(`Đã cập nhật lesson ${lesson.lesson_number} cho từ '${vocabItem.vocab}'.`);
                }
                catch (error) {
                    failedVocabs.push({
                        vocab: vocabItem.vocab,
                        reason: `Failed to update lessons: ${error.message}`,
                    });
                    continue;
                }
            }
            else {
                console.log(`Từ '${vocabItem.vocab}' đã có lesson ${lesson.lesson_number}, bỏ qua.`);
            }
            if (vocabItem.examples && vocabItem.examples.length > 0) {
                const newExamples = vocabItem.examples.map((ex) => exampleRepo.create({
                    example_text: ex.example_text,
                    furigana: ex.furigana,
                    meaning_vi: ex.meaning_vi,
                    meaning_en: ex.meaning_en || '',
                    vocab: existingVocab,
                }));
                await exampleRepo.save(newExamples);
                console.log(`Đã thêm ${newExamples.length} ví dụ cho từ '${vocabItem.vocab}'.`);
            }
            continue;
        }
        let savedVocab;
        if (!hasKanji) {
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
            }
            catch (error) {
                failedVocabs.push({
                    vocab: vocabItem.vocab,
                    reason: `Failed to save: ${error.message}`,
                });
                continue;
            }
            if (vocabItem.examples && vocabItem.examples.length > 0) {
                const examples = vocabItem.examples.map((ex) => exampleRepo.create({
                    example_text: ex.example_text,
                    furigana: ex.furigana,
                    meaning_vi: ex.meaning_vi,
                    meaning_en: ex.meaning_en || '',
                    vocab: savedVocab,
                }));
                await exampleRepo.save(examples);
            }
            console.log(`Từ vựng '${vocabItem.vocab}' (không chứa Kanji) đã được seed thành công.`);
            continue;
        }
        const existingKanjis = await kanjiRepo.find({ where: { kanji: (0, typeorm_1.In)(kanjiList) } });
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
        }
        catch (error) {
            failedVocabs.push({
                vocab: vocabItem.vocab,
                reason: `Failed to save: ${error.message}`,
            });
            continue;
        }
        if (vocabItem.examples && vocabItem.examples.length > 0) {
            const examples = vocabItem.examples.map((ex) => exampleRepo.create({
                example_text: ex.example_text,
                furigana: ex.furigana,
                meaning_vi: ex.meaning_vi,
                meaning_en: ex.meaning_en || '',
                vocab: savedVocab,
            }));
            await exampleRepo.save(examples);
        }
        console.log(`Từ vựng '${vocabItem.vocab}' đã được seed thành công với Kanji: ${existingKanjis
            .map((k) => k.kanji)
            .join(', ')} và Lesson: ${lesson.lesson_number}`);
    }
    if (failedVocabs.length > 0) {
        console.log('⚠️ Các từ vựng không seed được:');
        failedVocabs.forEach((fv) => console.log(`- ${fv.vocab}: ${fv.reason}`));
    }
}
seedVocabs(vocab_mimikara_n2_1.vocabMimikaraSeedN2Data)
    .catch((err) => {
    console.error('❌ Failed to seed vocabs:', err);
    process.exit(1);
})
    .finally(async () => {
    await dataSourceSeed_1.default.destroy();
});
exports.default = seedVocabs;
//# sourceMappingURL=seed-vocabMimikaraN2.js.map