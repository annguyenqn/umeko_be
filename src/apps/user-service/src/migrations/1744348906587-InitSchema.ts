import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1744348906587 implements MigrationInterface {
    name = 'InitSchema1744348906587'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_review_history" DROP CONSTRAINT "FK_8bfea8785ffa90820ffa45b08a2"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP CONSTRAINT "FK_b5d0e1b57bc6c761fb49e79bf89"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP CONSTRAINT "FK_6f489ec05339cf9876e7dec7cdd"`);
        await queryRunner.query(`ALTER TABLE "user_review_history" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user_review_history" DROP COLUMN "vocabId"`);
        await queryRunner.query(`ALTER TABLE "user_review_history" DROP COLUMN "reviewDate"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP CONSTRAINT "PK_b5d0e1b57bc6c761fb49e79bf89"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP COLUMN "totalWordsLearned"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP COLUMN "totalReviews"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP COLUMN "lastReview"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP CONSTRAINT "PK_5e32f4a1fc34e5acad67093ed2f"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD CONSTRAINT "PK_c6b4003fb4b9cc52c7f12b04157" PRIMARY KEY ("vocabId")`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP CONSTRAINT "PK_c6b4003fb4b9cc52c7f12b04157"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP COLUMN "vocabId"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP COLUMN "learningStatus"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP COLUMN "addedAt"`);
        await queryRunner.query(`ALTER TABLE "user_review_history" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_review_history" ADD "vocab_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_review_history" ADD "review_date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD CONSTRAINT "PK_c41601eeb8415a9eb15c8a4e557" PRIMARY KEY ("user_id")`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD "total_words_learned" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD "total_reviews" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD "last_review" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD CONSTRAINT "PK_c6a52c20a56d55fb521a60860c9" PRIMARY KEY ("user_id")`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD "vocab_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP CONSTRAINT "PK_c6a52c20a56d55fb521a60860c9"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD CONSTRAINT "PK_0feee6bf752cf77180609fae873" PRIMARY KEY ("user_id", "vocab_id")`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD "learning_status" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD "added_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user_review_history" ADD CONSTRAINT "FK_85e036d94887bb8c12642486e59" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD CONSTRAINT "FK_c41601eeb8415a9eb15c8a4e557" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD CONSTRAINT "FK_c6a52c20a56d55fb521a60860c9" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP CONSTRAINT "FK_c6a52c20a56d55fb521a60860c9"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP CONSTRAINT "FK_c41601eeb8415a9eb15c8a4e557"`);
        await queryRunner.query(`ALTER TABLE "user_review_history" DROP CONSTRAINT "FK_85e036d94887bb8c12642486e59"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP COLUMN "added_at"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP COLUMN "learning_status"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP CONSTRAINT "PK_0feee6bf752cf77180609fae873"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD CONSTRAINT "PK_c6a52c20a56d55fb521a60860c9" PRIMARY KEY ("user_id")`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP COLUMN "vocab_id"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP CONSTRAINT "PK_c6a52c20a56d55fb521a60860c9"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP COLUMN "last_review"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP COLUMN "total_reviews"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP COLUMN "total_words_learned"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP CONSTRAINT "PK_c41601eeb8415a9eb15c8a4e557"`);
        await queryRunner.query(`ALTER TABLE "user_progress" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "user_review_history" DROP COLUMN "review_date"`);
        await queryRunner.query(`ALTER TABLE "user_review_history" DROP COLUMN "vocab_id"`);
        await queryRunner.query(`ALTER TABLE "user_review_history" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD "addedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD "learningStatus" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD "vocabId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD CONSTRAINT "PK_c6b4003fb4b9cc52c7f12b04157" PRIMARY KEY ("vocabId")`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD "userId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_vocab" DROP CONSTRAINT "PK_c6b4003fb4b9cc52c7f12b04157"`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD CONSTRAINT "PK_5e32f4a1fc34e5acad67093ed2f" PRIMARY KEY ("userId", "vocabId")`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD "lastReview" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD "totalReviews" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD "totalWordsLearned" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD "userId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD CONSTRAINT "PK_b5d0e1b57bc6c761fb49e79bf89" PRIMARY KEY ("userId")`);
        await queryRunner.query(`ALTER TABLE "user_review_history" ADD "reviewDate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_review_history" ADD "vocabId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_review_history" ADD "userId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_vocab" ADD CONSTRAINT "FK_6f489ec05339cf9876e7dec7cdd" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_progress" ADD CONSTRAINT "FK_b5d0e1b57bc6c761fb49e79bf89" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_review_history" ADD CONSTRAINT "FK_8bfea8785ffa90820ffa45b08a2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
