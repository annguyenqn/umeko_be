import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1743238691001 implements MigrationInterface {
    name = 'InitSchema1743238691001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "kanji_example" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "example_text" character varying NOT NULL, "meaning_vi" text NOT NULL, "meaning_en" text NOT NULL, "kanji_id" uuid, CONSTRAINT "PK_97f8949f2053036ea64997e3cf8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vocab_example" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "example_text" character varying NOT NULL, "meaning_vi" text NOT NULL, "meaning_en" text NOT NULL, "vocab_id" uuid, CONSTRAINT "PK_d9e76e32f508221795af35962ce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "description" character varying(255), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lesson" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "lesson_number" integer NOT NULL, "level" character varying NOT NULL, "description" character varying(255), "category_id" uuid, CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vocabulary" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "vocab" character varying NOT NULL, "furigana" character varying, "mean_vi" text NOT NULL, "mean_en" text NOT NULL, CONSTRAINT "UQ_04a3b0a79057c6bc74de650628b" UNIQUE ("vocab"), CONSTRAINT "PK_65dbd74f76cee79778299a2a21b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "kanji" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "kanji" character varying(1) NOT NULL, "han_viet" character varying NOT NULL, "radicals" character varying, "strokes" integer NOT NULL, "meaning_vi" text NOT NULL, "meaning_en" text NOT NULL, "on_reading" text array NOT NULL, "kun_reading" text array NOT NULL, "level" character varying NOT NULL, CONSTRAINT "UQ_52f8a0db8cdb316ba1f41d96995" UNIQUE ("kanji"), CONSTRAINT "PK_86badca2d76e3280d4314bdc664" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vocab_lesson" ("vocabularyId" uuid NOT NULL, "lessonId" uuid NOT NULL, CONSTRAINT "PK_7907e7f62b313199a7cf9a01c63" PRIMARY KEY ("vocabularyId", "lessonId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e28ef6c3a2122d718c241324f6" ON "vocab_lesson" ("vocabularyId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9b15eb59a601d339ef5c1a2b1f" ON "vocab_lesson" ("lessonId") `);
        await queryRunner.query(`CREATE TABLE "vocab_kanji" ("vocabularyId" uuid NOT NULL, "kanjiId" uuid NOT NULL, CONSTRAINT "PK_8bb31ba2f1fc16df0e713a9f4d7" PRIMARY KEY ("vocabularyId", "kanjiId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b577cb975348a4e6e238d28faf" ON "vocab_kanji" ("vocabularyId") `);
        await queryRunner.query(`CREATE INDEX "IDX_79e250b710d344aa60ae781e29" ON "vocab_kanji" ("kanjiId") `);
        await queryRunner.query(`ALTER TABLE "kanji_example" ADD CONSTRAINT "FK_8de85d66ecd0ac2c6ede32091a3" FOREIGN KEY ("kanji_id") REFERENCES "kanji"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vocab_example" ADD CONSTRAINT "FK_5a5a1718d5d247fb33322202f71" FOREIGN KEY ("vocab_id") REFERENCES "vocabulary"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_f423e41d8644cca896d0020e4e2" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vocab_lesson" ADD CONSTRAINT "FK_e28ef6c3a2122d718c241324f66" FOREIGN KEY ("vocabularyId") REFERENCES "vocabulary"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "vocab_lesson" ADD CONSTRAINT "FK_9b15eb59a601d339ef5c1a2b1f0" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vocab_kanji" ADD CONSTRAINT "FK_b577cb975348a4e6e238d28fafe" FOREIGN KEY ("vocabularyId") REFERENCES "vocabulary"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "vocab_kanji" ADD CONSTRAINT "FK_79e250b710d344aa60ae781e29d" FOREIGN KEY ("kanjiId") REFERENCES "kanji"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vocab_kanji" DROP CONSTRAINT "FK_79e250b710d344aa60ae781e29d"`);
        await queryRunner.query(`ALTER TABLE "vocab_kanji" DROP CONSTRAINT "FK_b577cb975348a4e6e238d28fafe"`);
        await queryRunner.query(`ALTER TABLE "vocab_lesson" DROP CONSTRAINT "FK_9b15eb59a601d339ef5c1a2b1f0"`);
        await queryRunner.query(`ALTER TABLE "vocab_lesson" DROP CONSTRAINT "FK_e28ef6c3a2122d718c241324f66"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_f423e41d8644cca896d0020e4e2"`);
        await queryRunner.query(`ALTER TABLE "vocab_example" DROP CONSTRAINT "FK_5a5a1718d5d247fb33322202f71"`);
        await queryRunner.query(`ALTER TABLE "kanji_example" DROP CONSTRAINT "FK_8de85d66ecd0ac2c6ede32091a3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_79e250b710d344aa60ae781e29"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b577cb975348a4e6e238d28faf"`);
        await queryRunner.query(`DROP TABLE "vocab_kanji"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9b15eb59a601d339ef5c1a2b1f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e28ef6c3a2122d718c241324f6"`);
        await queryRunner.query(`DROP TABLE "vocab_lesson"`);
        await queryRunner.query(`DROP TABLE "kanji"`);
        await queryRunner.query(`DROP TABLE "vocabulary"`);
        await queryRunner.query(`DROP TABLE "lesson"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "vocab_example"`);
        await queryRunner.query(`DROP TABLE "kanji_example"`);
    }

}
