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
exports.VocabExample = void 0;
const typeorm_1 = require("typeorm");
const Vocabulary_entity_1 = require("./Vocabulary.entity");
let VocabExample = class VocabExample {
};
exports.VocabExample = VocabExample;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], VocabExample.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VocabExample.prototype, "example_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], VocabExample.prototype, "furigana", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], VocabExample.prototype, "meaning_vi", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], VocabExample.prototype, "meaning_en", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Vocabulary_entity_1.Vocabulary, vocab => vocab.examples, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'vocab_id' }),
    __metadata("design:type", Vocabulary_entity_1.Vocabulary)
], VocabExample.prototype, "vocab", void 0);
exports.VocabExample = VocabExample = __decorate([
    (0, typeorm_1.Entity)()
], VocabExample);
//# sourceMappingURL=VocabExample.entity.js.map