import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1744256608281 implements MigrationInterface {
    name = 'InitSchema1744256608281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_review_history" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL, "vocabId" uuid NOT NULL, "reviewDate" TIMESTAMP NOT NULL, "result" character varying(10) NOT NULL, "notes" text, CONSTRAINT "PK_f650cbea79746b264738272c920" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_vocab" ("userId" uuid NOT NULL, "vocabId" uuid NOT NULL, "learningStatus" character varying(20), "addedAt" TIMESTAMP, CONSTRAINT "PK_5e32f4a1fc34e5acad67093ed2f" PRIMARY KEY ("userId", "vocabId"))`);
        await queryRunner.query(`CREATE TABLE "user_progress" ("userId" uuid NOT NULL, "totalWordsLearned" integer NOT NULL DEFAULT '0', "totalReviews" integer NOT NULL DEFAULT '0', "lastReview" TIMESTAMP, CONSTRAINT "PK_b5d0e1b57bc6c761fb49e79bf89" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`ALTER TABLE "user_review_history" ADD CONSTRAINT "FK_8bfea8785ffa90820ffa45b08a2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD CONSTRAINT "FK_6f489ec05339cf9876e7dec7cdd" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD CONSTRAINT "FK_b5d0e1b57bc6c761fb49e79bf89" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_progress" DROP CONSTRAINT "FK_b5d0e1b57bc6c761fb49e79bf89"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP CONSTRAINT "FK_6f489ec05339cf9876e7dec7cdd"`);
        await queryRunner.query(`ALTER TABLE "user_review_history" DROP CONSTRAINT "FK_8bfea8785ffa90820ffa45b08a2"`);
        await queryRunner.query(`DROP TABLE "user_progress"`);
        await queryRunner.query(`DROP TABLE "user_vocab"`);
        await queryRunner.query(`DROP TABLE "user_review_history"`);
    }

}
