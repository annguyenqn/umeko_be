"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataSourceSeed_1 = require("../dataSourceSeed");
const Lesson_entity_1 = require("../entities/Lesson.entity");
const Category_entity_1 = require("../entities/Category.entity");
async function seedLessons() {
    await dataSourceSeed_1.default.initialize();
    const categoryRepo = dataSourceSeed_1.default.getRepository(Category_entity_1.Category);
    const lessonRepo = dataSourceSeed_1.default.getRepository(Lesson_entity_1.Lesson);
    const N2 = await categoryRepo.findOne({ where: { name: 'N2' } });
    if (!N2) {
        console.error('❌ Category N2 not found. Please seed categories first.');
        process.exit(1);
    }
    const descriptions = [
        ['Học từ vựng về con người và cuộc sống.', 'Learning vocabulary about people and life.'],
        ['Học từ vựng về cảm xúc và tính cách.', 'Learning vocabulary about emotions and personality.'],
        ['Học từ vựng về gia đình và bạn bè.', 'Learning vocabulary about family and friends.'],
        ['Học từ vựng về nghề nghiệp và công việc.', 'Learning vocabulary about occupations and work.'],
        ['Học từ vựng về học tập và giáo dục.', 'Learning vocabulary about studying and education.'],
        ['Học từ vựng về cuộc sống hàng ngày.', 'Learning vocabulary about daily life.'],
        ['Học từ vựng về thực phẩm và đồ uống.', 'Learning vocabulary about food and drinks.'],
        ['Học từ vựng về mua sắm và cửa hàng.', 'Learning vocabulary about shopping and stores.'],
        ['Học từ vựng về nhà cửa và đồ nội thất.', 'Learning vocabulary about houses and furniture.'],
        ['Học từ vựng về thành phố và giao thông.', 'Learning vocabulary about cities and transportation.'],
        ['Học từ vựng về thiên nhiên và môi trường.', 'Learning vocabulary about nature and the environment.'],
        ['Học từ vựng về động vật và thực vật.', 'Learning vocabulary about animals and plants.'],
        ['Học từ vựng về thời tiết và khí hậu.', 'Learning vocabulary about weather and climate.'],
        ['Học từ vựng về thể thao và giải trí.', 'Learning vocabulary about sports and entertainment.'],
        ['Học từ vựng về sức khỏe và y tế.', 'Learning vocabulary about health and medicine.'],
        ['Học từ vựng về khoa học và công nghệ.', 'Learning vocabulary about science and technology.'],
        ['Học từ vựng về máy tính và internet.', 'Learning vocabulary about computers and the internet.'],
        ['Học từ vựng về truyền thông và báo chí.', 'Learning vocabulary about media and journalism.'],
        ['Học từ vựng về nghệ thuật và văn hóa.', 'Learning vocabulary about art and culture.'],
        ['Học từ vựng về âm nhạc và phim ảnh.', 'Learning vocabulary about music and movies.'],
        ['Học từ vựng về du lịch và địa điểm.', 'Learning vocabulary about travel and places.'],
        ['Học từ vựng về khách sạn và chỗ ở.', 'Learning vocabulary about hotels and accommodations.'],
        ['Học từ vựng về giao tiếp và ngôn ngữ.', 'Learning vocabulary about communication and language.'],
        ['Học từ vựng về cảm xúc và biểu cảm.', 'Learning vocabulary about feelings and expressions.'],
        ['Học từ vựng về thời gian và ngày tháng.', 'Learning vocabulary about time and dates.'],
        ['Học từ vựng về số đếm và toán học.', 'Learning vocabulary about numbers and mathematics.'],
        ['Học từ vựng về màu sắc và hình dạng.', 'Learning vocabulary about colors and shapes.'],
        ['Học từ vựng về kích thước và đo lường.', 'Learning vocabulary about size and measurement.'],
        ['Học từ vựng về phương hướng và vị trí.', 'Learning vocabulary about directions and positions.'],
        ['Học từ vựng về động từ và hành động.', 'Learning vocabulary about verbs and actions.'],
        ['Học từ vựng về tính từ và trạng thái.', 'Learning vocabulary about adjectives and states.'],
        ['Học từ vựng về trạng từ và mức độ.', 'Learning vocabulary about adverbs and degrees.'],
        ['Học từ vựng về các cụm từ thông dụng.', 'Learning vocabulary about common phrases.'],
        ['Học từ vựng về thành ngữ và tục ngữ.', 'Learning vocabulary about idioms and proverbs.'],
        ['Học từ vựng về từ đồng nghĩa và trái nghĩa.', 'Learning vocabulary about synonyms and antonyms.'],
        ['Học từ vựng về từ viết tắt và ký hiệu.', 'Learning vocabulary about abbreviations and symbols.'],
        ['Học từ vựng về từ mượn và từ ngoại lai.', 'Learning vocabulary about loanwords and foreign words.'],
        ['Học từ vựng về lịch sử và sự kiện.', 'Learning vocabulary about history and events.'],
        ['Học từ vựng về chính trị và xã hội.', 'Learning vocabulary about politics and society.'],
        ['Học từ vựng về kinh tế và thương mại.', 'Learning vocabulary about economy and commerce.'],
        ['Học từ vựng về luật pháp và quy định.', 'Learning vocabulary about law and regulations.'],
        ['Học từ vựng về tôn giáo và triết học.', 'Learning vocabulary about religion and philosophy.'],
        ['Học từ vựng về giáo dục và đào tạo.', 'Learning vocabulary about education and training.'],
        ['Học từ vựng về nghề nghiệp và kỹ năng.', 'Learning vocabulary about jobs and skills.'],
        ['Học từ vựng về công việc và kinh doanh.', 'Learning vocabulary about work and business.'],
        ['Học từ vựng về quản lý và lãnh đạo.', 'Learning vocabulary about management and leadership.'],
        ['Học từ vựng về tài chính và ngân hàng.', 'Learning vocabulary about finance and banking.'],
        ['Học từ vựng về bảo hiểm và đầu tư.', 'Learning vocabulary about insurance and investment.'],
        ['Học từ vựng về thuế và kế toán.', 'Learning vocabulary about tax and accounting.'],
        ['Học từ vựng về marketing và quảng cáo.', 'Learning vocabulary about marketing and advertising.'],
        ['Học từ vựng về sản xuất và công nghiệp.', 'Learning vocabulary about production and industry.'],
        ['Học từ vựng về nông nghiệp và chăn nuôi.', 'Learning vocabulary about agriculture and livestock.'],
        ['Học từ vựng về xây dựng và kiến trúc.', 'Learning vocabulary about construction and architecture.'],
        ['Học từ vựng về giao thông và vận tải.', 'Learning vocabulary about transport and logistics.'],
        ['Học từ vựng về năng lượng và tài nguyên.', 'Learning vocabulary about energy and resources.'],
        ['Học từ vựng về môi trường và sinh thái.', 'Learning vocabulary about environment and ecology.'],
        ['Học từ vựng về khoa học và nghiên cứu.', 'Learning vocabulary about science and research.'],
        ['Học từ vựng về công nghệ và phát minh.', 'Learning vocabulary about technology and inventions.'],
        ['Học từ vựng về văn hóa và xã hội.', 'Learning vocabulary about culture and society.'],
        ['Học từ vựng về tôn giáo và tín ngưỡng.', 'Learning vocabulary about religion and beliefs.'],
        ['Học từ vựng về phong tục và truyền thống.', 'Learning vocabulary about customs and traditions.'],
        ['Học từ vựng về trang phục và thời trang.', 'Learning vocabulary about clothing and fashion.'],
        ['Học từ vựng về ẩm thực và món ăn.', 'Learning vocabulary about cuisine and dishes.'],
        ['Học từ vựng về ngôn ngữ và phương ngữ.', 'Learning vocabulary about languages and dialects.'],
        ['Học từ vựng về văn học và thơ ca.', 'Learning vocabulary about literature and poetry.'],
        ['Học từ vựng về triết học và tư tưởng.', 'Learning vocabulary about philosophy and thought.'],
        ['Học từ vựng về nghệ thuật và biểu diễn.', 'Learning vocabulary about art and performance.'],
        ['Học từ vựng về các lễ hội và sự kiện.', 'Learning vocabulary about festivals and events.'],
        ['Học từ vựng về đời sống và cộng đồng.', 'Learning vocabulary about lifestyle and community.'],
        ['Học từ vựng về đời sống và cộng đồng.', 'Learning vocabulary about lifestyle and community.'],
        ['Học từ vựng về công việc và sự nghiệp.', 'Learning vocabulary about work and career.'],
        ['Học từ vựng về sở thích và thói quen.', 'Learning vocabulary about hobbies and habits.'],
        ['Học từ vựng về gia đình và mối quan hệ.', 'Learning vocabulary about family and relationships.'],
        ['Học từ vựng về hành động và thói quen hàng ngày.', 'Learning vocabulary about actions and daily habits.'],
        ['Học từ vựng về các tình huống xã hội.', 'Learning vocabulary about social situations.'],
        ['Học từ vựng về tình cảm và cảm xúc.', 'Learning vocabulary about emotions and feelings.'],
        ['Học từ vựng về giáo dục và học tập.', 'Learning vocabulary about education and learning.'],
        ['Học từ vựng về sức khỏe và thể dục.', 'Learning vocabulary about health and fitness.'],
        ['Học từ vựng về môi trường và thiên nhiên.', 'Learning vocabulary about the environment and nature.'],
        ['Học từ vựng về khoa học và công nghệ.', 'Learning vocabulary about science and technology.'],
        ['Học từ vựng về chính trị và xã hội.', 'Learning vocabulary about politics and society.'],
        ['Học từ vựng về văn hóa và truyền thống.', 'Learning vocabulary about culture and traditions.'],
        ['Học từ vựng về nghệ thuật và giải trí.', 'Learning vocabulary about arts and entertainment.'],
        ['Học từ vựng về lịch sử và các sự kiện quan trọng.', 'Learning vocabulary about history and important events.'],
        ['Học từ vựng về du lịch và khám phá.', 'Learning vocabulary about travel and exploration.'],
        ['Học từ vựng về các hiện tượng tự nhiên và thiên nhiên.', 'Learning vocabulary about natural phenomena and nature.'],
        ['Học từ vựng về các mối quan hệ giữa các quốc gia.', 'Learning vocabulary about international relations.'],
        ['Học từ vựng về thịnh vượng và các vấn đề kinh tế.', 'Learning vocabulary about prosperity and economic issues.'],
        ['Học từ vựng về đạo đức và các giá trị xã hội.', 'Learning vocabulary about ethics and social values.']
    ];
    for (let i = 0; i < descriptions.length; i++) {
        const lesson_number = i + 1;
        const [description_vi, description_en] = descriptions[i];
        const exists = await lessonRepo.findOne({
            where: { lesson_number, level: 'N2' },
        });
        if (!exists) {
            const lesson = lessonRepo.create({
                lesson_number,
                level: 'N2',
                description_vi,
                description_en,
                category: N2,
            });
            await lessonRepo.save(lesson);
        }
    }
    console.log('✅ Seeded lessons for N2!');
    process.exit(0);
}
seedLessons().catch((err) => {
    console.error('❌ Failed to seed lessons:', err);
    process.exit(1);
});
//# sourceMappingURL=seed-lessonMimikaraN2.js.map