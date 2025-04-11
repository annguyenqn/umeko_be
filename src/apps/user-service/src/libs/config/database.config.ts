import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('database', () => ({
  users: {
    type: 'postgres',
    host: process.env.USERS_DB_HOST,
    port: parseInt(process.env.USERS_DB_PORT || 'localhost', 10),
    username: process.env.USERS_DB_USERNAME,
    password: process.env.USERS_DB_PASSWORD,
    database: process.env.USERS_DB_NAME,
    entities: ['dist/apps/user-service/entities/*.entity.js'],
    migrations: ['dist/apps/user-service/migrations/*.js'],
    synchronize: process.env.NODE_ENV === 'development',
    logging: process.env.NODE_ENV === 'development',
  }
})); 