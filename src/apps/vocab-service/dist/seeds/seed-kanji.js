"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataSourceSeed_1 = require("../dataSourceSeed");
const Kanji_entity_1 = require("../entities/Kanji.entity");
const KanjiExample_entity_1 = require("../entities/KanjiExample.entity");
const kanji_data_1 = require("./data/kanji-data");
async function seedKanji() {
    await dataSourceSeed_1.default.initialize();
    const kanjiRepo = dataSourceSeed_1.default.getRepository(Kanji_entity_1.Kanji);
    const exampleRepo = dataSourceSeed_1.default.getRepository(KanjiExample_entity_1.KanjiExample);
    for (const item of kanji_data_1.kanjiSeedData) {
        const exists = await kanjiRepo.findOne({ where: { kanji: item.kanji } });
        if (exists) {
            console.log(`⚠️  Kanji "${item.kanji}" đã tồn tại, bỏ qua.`);
            continue;
        }
        const { examples, on_reading = [], kun_reading = [], ...kanjiData } = item;
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
//# sourceMappingURL=seed-kanji.js.map