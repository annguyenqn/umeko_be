import dataSourceSeed from '../dataSourceSeed';

import { Lesson } from '../entities/Lesson.entity';
import { Category } from '../entities/Category.entity';

async function seedLessons() {
  await dataSourceSeed.initialize();

  const categoryRepo = dataSourceSeed.getRepository(Category);
  const lessonRepo = dataSourceSeed.getRepository(Lesson);

  const n5 = await categoryRepo.findOne({ where: { name: 'N5' } });
  if (!n5) {
    console.error('❌ Category N5 not found. Please seed categories first.');
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
  ];

  for (let i = 0; i < descriptions.length; i++) {
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

  console.log('✅ Seeded lessons!');
  process.exit(0);
}

seedLessons().catch((err) => {
  console.error('❌ Failed to seed lessons:', err);
  process.exit(1);
});
