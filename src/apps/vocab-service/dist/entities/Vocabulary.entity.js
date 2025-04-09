"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vocabulary = void 0;
const typeorm_1 = require("typeorm");
const VocabExample_entity_1 = require("./VocabExample.entity");
const Lesson_entity_1 = require("./Lesson.entity");
const Kanji_entity_1 = require("./Kanji.entity");
let Vocabulary = class Vocabulary {
};
exports.Vocabulary = Vocabulary;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Vocabulary.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Vocabulary.prototype, "vocab", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Vocabulary.prototype, "furigana", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Vocabulary.prototype, "mean_vi", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Vocabulary.prototype, "mean_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Vocabulary.prototype, "image_link", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Vocabulary.prototype, "sound_link", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Vocabulary.prototype, "word_type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => VocabExample_entity_1.VocabExample, example => example.vocab),
    __metadata("design:type", Array)
], Vocabulary.prototype, "examples", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Lesson_entity_1.Lesson, lesson => lesson.vocabularies),
    (0, typeorm_1.JoinTable)({ name: 'vocab_lesson' }),
    __metadata("design:type", Array)
], Vocabulary.prototype, "lessons", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Kanji_entity_1.Kanji, kanji => kanji.vocabularies),
    (0, typeorm_1.JoinTable)({ name: 'vocab_kanji' }),
    __metadata("design:type", Array)
], Vocabulary.prototype, "kanjis", void 0);
exports.Vocabulary = Vocabulary = __decorate([
    (0, typeorm_1.Entity)()
], Vocabulary);
//# sourceMappingURL=Vocabulary.entity.js.map