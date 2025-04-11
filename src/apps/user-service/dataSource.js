"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const database_config_1 = require("./src/libs/config/database.config");
const dotenv = require("dotenv");
dotenv.config();
const userDB = (0, database_config_1.databaseConfig)().users;
exports.AppDataSource = new typeorm_1.DataSource({
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
//# sourceMappingURL=dataSource.js.map