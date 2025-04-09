"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataSourceSeed_1 = require("../dataSourceSeed");
const Lesson_entity_1 = require("../entities/Lesson.entity");
const Category_entity_1 = require("../entities/Category.entity");
async function seedLessons() {
    await dataSourceSeed_1.default.initialize();
    const categoryRepo = dataSourceSeed_1.default.getRepository(Category_entity_1.Category);
    const lessonRepo = dataSourceSeed_1.default.getRepository(Lesson_entity_1.Lesson);
    const n5 = await categoryRepo.findOne({ where: { name: 'N5' } });
    const n4 = await categoryRepo.findOne({ where: { name: 'N4' } });
    if (!n5 || !n4) {
        console.error('❌ Category N5 or N4 not found. Please seed categories first.');
        process.exit(1);
    }
    const descriptions = [
        ['Giới thiệu bản thân và chào hỏi cơ bản.', 'Self-introduction and basic greetings.'],
        ['Hỏi và trả lời về đồ vật xung quanh.', 'Asking and answering about surrounding objects.'],
        ['Hỏi về địa điểm và nơi chốn.', 'Talking about locations and places.'],
        ['Nói về thời gian và ngày tháng.', 'Talking about time and dates.'],
        ['Hỏi và chỉ đường, phương tiện giao thông.', 'Asking for directions and transportation.'],
        ['Mô tả hành động hàng ngày và thói quen.', 'Daily activities and habits.'],
        ['Học về cách cho và nhận đồ vật.', 'Giving and receiving items.'],
        ['Mô tả trạng thái và tính chất của sự vật.', 'Describing states and properties.'],
        ['Nói về sở thích và khả năng.', 'Talking about hobbies and abilities.'],
        ['Mô tả vị trí và sự tồn tại của đồ vật và người.', 'Describing positions and existence.'],
        ['Đếm số lượng và hỏi về giá cả.', 'Counting and prices.'],
        ['Nói về thời tiết và cảm xúc.', 'Weather and emotions.'],
        ['Yêu cầu và đề nghị trong cuộc sống hàng ngày.', 'Requests and suggestions.'],
        ['Hướng dẫn và mệnh lệnh đơn giản.', 'Instructions and commands.'],
        ['Nói về kinh nghiệm và quá khứ.', 'Talking about experiences and the past.'],
        ['Sử dụng thể khả năng để diễn đạt khả năng.', 'Using potential form to express ability.'],
        ['Nói về sức khỏe và yêu cầu giúp đỡ.', 'Health and asking for help.'],
        ['Mô tả sở thích và hoạt động giải trí.', 'Hobbies and leisure activities.'],
        ['Nói về kinh nghiệm du lịch và tham quan.', 'Travel and sightseeing experiences.'],
        ['Sử dụng thể lịch sự trong giao tiếp.', 'Using polite expressions.'],
        ['Biểu đạt ý kiến và cảm xúc.', 'Expressing opinions and feelings.'],
        ['Nói về thói quen và phong tục.', 'Talking about customs and habits.'],
        ['Hỏi và đưa ra lời khuyên.', 'Asking and giving advice.'],
        ['Diễn đạt dự định và kế hoạch tương lai.', 'Talking about plans and intentions.'],
        ['Tổng kết và ôn tập kiến thức đã học.', 'Review and summarize learned content.'],
        ['Sử dụng thể bị động để mô tả sự việc.', 'Using passive form to describe events.'],
        ['Nói về nguyên nhân và lý do.', 'Talking about causes and reasons.'],
        ['Diễn đạt sự thay đổi trạng thái bằng thể quá khứ.', 'Describing state changes with past tense.'],
        ['Hỏi và trả lời về kinh nghiệm cá nhân.', 'Asking and answering about personal experiences.'],
        ['Sử dụng câu điều kiện để diễn đạt giả định.', 'Using conditional sentences for assumptions.'],
        ['Mô tả hành động xảy ra đồng thời.', 'Describing simultaneous actions.'],
        ['Nói về sự thay đổi trong cuộc sống.', 'Talking about life changes.'],
        ['Diễn đạt ý định và kế hoạch cụ thể.', 'Expressing specific intentions and plans.'],
        ['Sử dụng thể sai khiến để yêu cầu.', 'Using causative form for requests.'],
        ['Mô tả hành động bắt buộc hoặc tự nguyện.', 'Describing obligatory or voluntary actions.'],
        ['Nói về thói quen và tần suất.', 'Talking about habits and frequency.'],
        ['Diễn đạt sự so sánh giữa các sự vật.', 'Comparing objects and things.'],
        ['Hỏi và trả lời về cảm xúc chi tiết.', 'Detailed questions and answers about emotions.'],
        ['Sử dụng câu ghép để nối ý.', 'Using compound sentences to connect ideas.'],
        ['Nói về dự định tương lai với mức độ chắc chắn.', 'Talking about future plans with certainty.'],
        ['Mô tả sự kiện và lễ hội truyền thống.', 'Describing traditional events and festivals.'],
        ['Diễn đạt lời mời và đề nghị lịch sự.', 'Expressing polite invitations and suggestions.'],
        ['Nói về kinh nghiệm làm việc và nghề nghiệp.', 'Talking about work and career experiences.'],
        ['Sử dụng thể bị động trong ngữ cảnh xã hội.', 'Using passive form in social contexts.'],
        ['Mô tả hành động đã hoàn thành và kết quả.', 'Describing completed actions and results.'],
        ['Diễn đạt sự tôn trọng và kính ngữ cơ bản.', 'Expressing respect and basic honorifics.'],
        ['Tổng kết và ôn tập kiến thức N4.', 'Review and summarize N4 content.'],
    ];
    for (let i = 0; i < 25; i++) {
        const lesson_number = i + 1;
        const [description_vi, description_en] = descriptions[i];
        const exists = await lessonRepo.findOne({
            where: { lesson_number, level: 'N5' },
        });
        if (!exists) {
            const lesson = lessonRepo.create({
                lesson_number,
                level: 'N5',
                description_vi,
                description_en,
                category: n5,
            });
            await lessonRepo.save(lesson);
        }
    }
    for (let i = 25; i < 47; i++) {
        const lesson_number = i + 1;
        const [description_vi, description_en] = descriptions[i];
        const exists = await lessonRepo.findOne({
            where: { lesson_number, level: 'N4' },
        });
        if (!exists) {
            const lesson = lessonRepo.create({
                lesson_number,
                level: 'N4',
                description_vi,
                description_en,
                category: n4,
            });
            await lessonRepo.save(lesson);
        }
    }
    console.log('✅ Seeded lessons for N5 and N4!');
    process.exit(0);
}
seedLessons().catch((err) => {
    console.error('❌ Failed to seed lessons:', err);
    process.exit(1);
});
//# sourceMappingURL=seed-lessons.js.map