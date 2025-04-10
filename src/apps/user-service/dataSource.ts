import { DataSource } from 'typeorm';
import { databaseConfig } from './src/libs/config/database.config';
import * as dotenv from 'dotenv';

dotenv.config();

const userDB = databaseConfig().users;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: userDB.host,
  port: userDB.port,
  username: userDB.username,
  password: userDB.password,
  database: userDB.database,
  entities: ['src/entities/*.entity.ts'], 
  migrations: ['src/migrations/*.ts'],    
  synchronize: false,
  logging: userDB.logging,
});

