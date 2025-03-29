import { DataSource } from 'typeorm';
import { databaseConfig } from '../../libs/config/database.config';
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
  entities: ['dist/apps/user-service/entities/*.entity.js'],
  migrations: ['dist/apps/user-service/migrations/*.js'],
  synchronize: false,
  logging: userDB.logging,
});

export default AppDataSource;
