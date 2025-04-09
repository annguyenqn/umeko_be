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
exports.Kanji = void 0;
const typeorm_1 = require("typeorm");
const KanjiExample_entity_1 = require("./KanjiExample.entity");
const Vocabulary_entity_1 = require("./Vocabulary.entity");
let Kanji = class Kanji {
};
exports.Kanji = Kanji;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Kanji.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 5, unique: true }),
    __metadata("design:type", String)
], Kanji.prototype, "kanji", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Kanji.prototype, "han_viet", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Kanji.prototype, "radicals", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Kanji.prototype, "strokes", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Kanji.prototype, "meaning_vi", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Kanji.prototype, "meaning_en", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true }),
    __metadata("design:type", Array)
], Kanji.prototype, "on_reading", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true }),
    __metadata("design:type", Array)
], Kanji.prototype, "kun_reading", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Kanji.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => KanjiExample_entity_1.KanjiExample, example => example.kanji),
    __metadata("design:type", Array)
], Kanji.prototype, "examples", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Vocabulary_entity_1.Vocabulary, vocab => vocab.kanjis),
    __metadata("design:type", Array)
], Kanji.prototype, "vocabularies", void 0);
exports.Kanji = Kanji = __decorate([
    (0, typeorm_1.Entity)()
], Kanji);
//# sourceMappingURL=Kanji.entity.js.map