import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1747064791717 implements MigrationInterface {
    name = 'InitSchema1747064791717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_review_history" ADD "next_review_date" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_review_history" DROP COLUMN "next_review_date"`);
    }

}
