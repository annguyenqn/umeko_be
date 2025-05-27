import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1748356492462 implements MigrationInterface {
    name = 'InitSchema1748356492462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "custom_vocab_entry" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" character varying NOT NULL, "word" character varying NOT NULL, "meaning" text NOT NULL, "example" character varying, "difficulty_level" integer NOT NULL DEFAULT '1', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "vocabSetId" uuid, CONSTRAINT "PK_feb4ef71f70eed63a7b84218da8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "custom_vocab_set" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_56e852fa7c57fab9db1cb5566a1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "custom_vocab_entry" ADD CONSTRAINT "FK_fe71d8ea86e84cf434ce647794e" FOREIGN KEY ("vocabSetId") REFERENCES "custom_vocab_set"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "custom_vocab_entry" DROP CONSTRAINT "FK_fe71d8ea86e84cf434ce647794e"`);
        await queryRunner.query(`DROP TABLE "custom_vocab_set"`);
        await queryRunner.query(`DROP TABLE "custom_vocab_entry"`);
    }

}
