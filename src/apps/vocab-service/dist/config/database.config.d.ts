export declare const databaseConfig: (() => {
    vocab: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        entities: string[];
        migrations: string[];
        synchronize: boolean;
        logging: boolean;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    vocab: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        entities: string[];
        migrations: string[];
        synchronize: boolean;
        logging: boolean;
    };
}>;
