import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1744041519838 implements MigrationInterface {
    name = 'InitSchema1744041519838'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vocabulary" ADD "image_link" character varying`);
        await queryRunner.query(`ALTER TABLE "vocabulary" ADD "sound_link" character varying`);
        await queryRunner.query(`ALTER TABLE "vocabulary" ADD "word_type" character varying`);
        await queryRunner.query(`ALTER TABLE "kanji" DROP CONSTRAINT "UQ_52f8a0db8cdb316ba1f41d96995"`);
        await queryRunner.query(`ALTER TABLE "kanji" DROP COLUMN "kanji"`);
        await queryRunner.query(`ALTER TABLE "kanji" ADD "kanji" character varying(5) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "kanji" ADD CONSTRAINT "UQ_52f8a0db8cdb316ba1f41d96995" UNIQUE ("kanji")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "kanji" DROP CONSTRAINT "UQ_52f8a0db8cdb316ba1f41d96995"`);
        await queryRunner.query(`ALTER TABLE "kanji" DROP COLUMN "kanji"`);
        await queryRunner.query(`ALTER TABLE "kanji" ADD "kanji" character varying(1) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "kanji" ADD CONSTRAINT "UQ_52f8a0db8cdb316ba1f41d96995" UNIQUE ("kanji")`);
        await queryRunner.query(`ALTER TABLE "vocabulary" DROP COLUMN "word_type"`);
        await queryRunner.query(`ALTER TABLE "vocabulary" DROP COLUMN "sound_link"`);
        await queryRunner.query(`ALTER TABLE "vocabulary" DROP COLUMN "image_link"`);
    }

}
