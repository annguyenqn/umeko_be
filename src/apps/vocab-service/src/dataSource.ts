import { DataSource } from 'typeorm';
import { databaseConfig } from './config/database.config';
import * as dotenv from 'dotenv';

// ✅ Import các entity rõ ràng
// import { Category } from './src/entities/Category.entity';
// import { Lesson } from './src/entities/Lesson.entity';
// import { Vocabulary } from './src/entities/Vocabulary.entity';
// import { VocabExample } from './src/entities/VocabExample.entity';
// import { Kanji } from './src/entities/Kanji.entity';
// import { KanjiExample } from './src/entities/KanjiExample.entity';
dotenv.config();

const vocabDB = databaseConfig().vocab;

const AppDataSource = new DataSource({
  type: 'postgres',
  host: vocabDB.host,
  port: vocabDB.port,
  username: vocabDB.username,
  password: vocabDB.password,
  database: vocabDB.database,
  synchronize: false,
  logging: vocabDB.logging,
  entities: [__dirname + '/entities/*.entity.{js,ts}'],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
});


export default AppDataSource;
