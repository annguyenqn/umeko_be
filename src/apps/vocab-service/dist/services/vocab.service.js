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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VocabService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Vocabulary_entity_1 = require("../entities/Vocabulary.entity");
const typeorm_2 = require("typeorm");
const Lesson_entity_1 = require("../entities/Lesson.entity");
const Category_entity_1 = require("../entities/Category.entity");
let VocabService = class VocabService {
    constructor(vocabRepo, lessonRepo, categoryRepo) {
        this.vocabRepo = vocabRepo;
        this.lessonRepo = lessonRepo;
        this.categoryRepo = categoryRepo;
    }
    async getVocabByLesson(lessonNumber, categoryId) {
        try {
            const categoryExists = await this.categoryRepo.findOne({ where: { id: categoryId } });
            if (!categoryExists) {
                throw new common_1.NotFoundException(`Category with ID ${categoryId} not found.`);
            }
            const lesson = await this.lessonRepo.findOne({
                where: { lesson_number: lessonNumber, category: { id: categoryId } },
                relations: ['vocabularies', 'vocabularies.kanjis', 'vocabularies.examples'],
            });
            if (!lesson) {
                throw new common_1.NotFoundException(`Lesson number ${lessonNumber} does not exist in category ID ${categoryId}.`);
            }
            return lesson.vocabularies;
        }
        catch (error) {
            console.error(`Error in getVocabByLesson:`, error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('An unexpected error occurred while retrieving vocabularies.');
        }
    }
    async getAllCategories() {
        return this.categoryRepo.find();
    }
    async getLessonsByCategory(categoryId) {
        return this.lessonRepo.find({
            where: { category: { id: categoryId } },
            relations: ['category'],
        });
    }
};
exports.VocabService = VocabService;
exports.VocabService = VocabService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Vocabulary_entity_1.Vocabulary)),
    __param(1, (0, typeorm_1.InjectRepository)(Lesson_entity_1.Lesson)),
    __param(2, (0, typeorm_1.InjectRepository)(Category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], VocabService);
//# sourceMappingURL=vocab.service.js.map