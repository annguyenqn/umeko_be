import dataSourceSeed from '../dataSourceSeed';
import { Kanji } from '../entities/Kanji.entity';
import { KanjiExample } from '../entities/KanjiExample.entity';
import { kanjiSeedData } from './data/kanji-data';

async function seedKanji() {
  await dataSourceSeed.initialize();

  const kanjiRepo = dataSourceSeed.getRepository(Kanji);
  const exampleRepo = dataSourceSeed.getRepository(KanjiExample);

  for (const item of kanjiSeedData) {
    const exists = await kanjiRepo.findOne({ where: { kanji: item.kanji } });

    if (exists) {
      console.log(`⚠️  Kanji "${item.kanji}" đã tồn tại, bỏ qua.`);
      continue;
    }

    // Tách example (nếu có), xử lý array mặc định
    const {
      examples,
      on_reading = [],
      kun_reading = [],
      ...kanjiData
    } = item;

    const kanji = kanjiRepo.create({
      ...kanjiData,
      on_reading,
      kun_reading,
    });

    await kanjiRepo.save(kanji);

    if (examples && examples.length > 0) {
      for (const ex of examples) {
        const example = exampleRepo.create({
          ...ex,
          kanji,
        });
        await exampleRepo.save(example);
      }
    }

    console.log(`✅ Đã thêm kanji "${item.kanji}"`);
  }

  console.log('🎉 Đã seed xong toàn bộ kanji!');
  process.exit(0);
}

seedKanji().catch((err) => {
  console.error('❌ Failed to seed kanji:', err);
  process.exit(1);
});
