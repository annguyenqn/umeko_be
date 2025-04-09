"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const config_1 = require("@nestjs/config");
exports.databaseConfig = (0, config_1.registerAs)('database', () => ({
    vocab: {
        type: 'postgres',
        host: process.env.VOCAB_DB_HOST,
        port: parseInt(process.env.VOCAB_DB_PORT, 10),
        username: process.env.VOCAB_DB_USERNAME,
        password: process.env.VOCAB_DB_PASSWORD,
        database: process.env.VOCAB_DB_NAME,
        entities: ['dist/apps/vocab-service/entities/*.entity.js'],
        migrations: ['dist/apps/vocab-service/migrations/*.js'],
        synchronize: false,
        logging: process.env.NODE_ENV === 'development',
    }
}));
//# sourceMappingURL=database.config.js.map