// import { DataSource } from 'typeorm';
// import * as dotenv from 'dotenv';
// dotenv.config();

// // ✅ Import các entity rõ ràng
// import { Category } from './entities/Category.entity';
// import { Lesson } from './entities/Lesson.entity';
// import { Vocabulary } from './entities/Vocabulary.entity';
// import { VocabExample } from './entities/VocabExample.entity';
// import { Kanji } from './entities/Kanji.entity';
// import { KanjiExample } from './entities/KanjiExample.entity';
// import { databaseConfig } from './config/database.config';
// const vocabDB = databaseConfig().vocab;

// const SeedDataSource = new DataSource({
//   type: 'postgres',
//   host: vocabDB.host,
//   port: vocabDB.port,
//   username: vocabDB.username,
//   password: vocabDB.password,
//   database: vocabDB.database,
//   synchronize: false,
//   logging: vocabDB.logging,
//   entities: [
//     Category,
//     Lesson,
//     Vocabulary,
//     VocabExample,
//     Kanji,
//     KanjiExample,
//   ],
// });

// export default SeedDataSource;
