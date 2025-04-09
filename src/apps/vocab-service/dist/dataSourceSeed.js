"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
const Category_entity_1 = require("./entities/Category.entity");
const Lesson_entity_1 = require("./entities/Lesson.entity");
const Vocabulary_entity_1 = require("./entities/Vocabulary.entity");
const VocabExample_entity_1 = require("./entities/VocabExample.entity");
const Kanji_entity_1 = require("./entities/Kanji.entity");
const KanjiExample_entity_1 = require("./entities/KanjiExample.entity");
const database_config_1 = require("./config/database.config");
const vocabDB = (0, database_config_1.databaseConfig)().vocab;
const SeedDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: vocabDB.host,
    port: vocabDB.port,
    username: vocabDB.username,
    password: vocabDB.password,
    database: vocabDB.database,
    synchronize: false,
    logging: vocabDB.logging,
    entities: [
        Category_entity_1.Category,
        Lesson_entity_1.Lesson,
        Vocabulary_entity_1.Vocabulary,
        VocabExample_entity_1.VocabExample,
        Kanji_entity_1.Kanji,
        KanjiExample_entity_1.KanjiExample,
    ],
});
exports.default = SeedDataSource;
//# sourceMappingURL=dataSourceSeed.js.map