import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1743249697055 implements MigrationInterface {
    name = 'InitSchema1743249697055'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vocab_example" ADD "furigana" character varying`);
        await queryRunner.query(`ALTER TABLE "kanji_example" ADD "furigana" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "kanji_example" DROP COLUMN "furigana"`);
        await queryRunner.query(`ALTER TABLE "vocab_example" DROP COLUMN "furigana"`);
    }

}
