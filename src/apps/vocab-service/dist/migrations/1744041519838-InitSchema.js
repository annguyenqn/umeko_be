"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitSchema1744041519838 = void 0;
class InitSchema1744041519838 {
    constructor() {
        this.name = 'InitSchema1744041519838';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "vocabulary" ADD "image_link" character varying`);
        await queryRunner.query(`ALTER TABLE "vocabulary" ADD "sound_link" character varying`);
        await queryRunner.query(`ALTER TABLE "vocabulary" ADD "word_type" character varying`);
        await queryRunner.query(`ALTER TABLE "kanji" DROP CONSTRAINT "UQ_52f8a0db8cdb316ba1f41d96995"`);
        await queryRunner.query(`ALTER TABLE "kanji" DROP COLUMN "kanji"`);
        await queryRunner.query(`ALTER TABLE "kanji" ADD "kanji" character varying(5) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "kanji" ADD CONSTRAINT "UQ_52f8a0db8cdb316ba1f41d96995" UNIQUE ("kanji")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "kanji" DROP CONSTRAINT "UQ_52f8a0db8cdb316ba1f41d96995"`);
        await queryRunner.query(`ALTER TABLE "kanji" DROP COLUMN "kanji"`);
        await queryRunner.query(`ALTER TABLE "kanji" ADD "kanji" character varying(1) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "kanji" ADD CONSTRAINT "UQ_52f8a0db8cdb316ba1f41d96995" UNIQUE ("kanji")`);
        await queryRunner.query(`ALTER TABLE "vocabulary" DROP COLUMN "word_type"`);
        await queryRunner.query(`ALTER TABLE "vocabulary" DROP COLUMN "sound_link"`);
        await queryRunner.query(`ALTER TABLE "vocabulary" DROP COLUMN "image_link"`);
    }
}
exports.InitSchema1744041519838 = InitSchema1744041519838;
//# sourceMappingURL=1744041519838-InitSchema.js.map