import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1743247679811 implements MigrationInterface {
    name = 'InitSchema1743247679811'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "description_vi" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "category" ADD "description_en" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "description_vi" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "description_en" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "description_en"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "description_vi"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "description_en"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "description_vi"`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "description" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "category" ADD "description" character varying(255)`);
    }

}
