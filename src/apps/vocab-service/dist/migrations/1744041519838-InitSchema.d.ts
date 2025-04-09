import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitSchema1744041519838 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
