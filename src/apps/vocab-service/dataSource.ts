import { DataSource } from 'typeorm';
import { databaseConfig } from '../../libs/config/database.config';
import * as dotenv from 'dotenv';
dotenv.config();

const vocabDB = databaseConfig().vocab;

const AppDataSource = new DataSource({
  type: 'postgres',
  host: vocabDB.host,
  port: vocabDB.port,
  username: vocabDB.username,
  password: vocabDB.password,
  database: vocabDB.database,
  entities: ['dist/apps/vocab-service/entities/*.entity.js'],
  migrations: ['dist/apps/vocab-service/migrations/*.js'],
  synchronize: false,
  logging: vocabDB.logging,
});

export default AppDataSource;
