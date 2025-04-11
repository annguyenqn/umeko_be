import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1744341148824 implements MigrationInterface {
    name = 'InitSchema1744341148824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_review_history" DROP CONSTRAINT "FK_8bfea8785ffa90820ffa45b08a2"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP CONSTRAINT "FK_b5d0e1b57bc6c761fb49e79bf89"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP CONSTRAINT "FK_6f489ec05339cf9876e7dec7cdd"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "codeExpired" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user_review_history" ADD CONSTRAINT "FK_8bfea8785ffa90820ffa45b08a2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD CONSTRAINT "FK_b5d0e1b57bc6c761fb49e79bf89" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD CONSTRAINT "FK_6f489ec05339cf9876e7dec7cdd" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP CONSTRAINT "FK_6f489ec05339cf9876e7dec7cdd"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP CONSTRAINT "FK_b5d0e1b57bc6c761fb49e79bf89"`);
        await queryRunner.query(`ALTER TABLE "user_review_history" DROP CONSTRAINT "FK_8bfea8785ffa90820ffa45b08a2"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "codeExpired" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD CONSTRAINT "FK_6f489ec05339cf9876e7dec7cdd" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD CONSTRAINT "FK_b5d0e1b57bc6c761fb49e79bf89" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_review_history" ADD CONSTRAINT "FK_8bfea8785ffa90820ffa45b08a2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
