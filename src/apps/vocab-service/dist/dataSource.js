"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const database_config_1 = require("./config/database.config");
const dotenv = require("dotenv");
dotenv.config();
const vocabDB = (0, database_config_1.databaseConfig)().vocab;
const AppDataSource = new typeorm_1.DataSource({
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
exports.default = AppDataSource;
//# sourceMappingURL=dataSource.js.map