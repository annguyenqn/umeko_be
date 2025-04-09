import dataSourceSeed from '../dataSourceSeed';
import { Lesson } from '../entities/Lesson.entity';
import { Category } from '../entities/Category.entity';

async function seedLessons() {
  await dataSourceSeed.initialize();

  const categoryRepo = dataSourceSeed.getRepository(Category);
  const lessonRepo = dataSourceSeed.getRepository(Lesson);

  // Tìm category N3
  const n3 = await categoryRepo.findOne({ where: { name: 'N3' } });
  if (!n3) {
    console.error('❌ Category N3 not found. Please seed categories first.');
    process.exit(1);
  }

  // Mảng mô tả cho N3 (dựa trên các unit và bài từ danh sách URL)
  const descriptions = [
    // Unit 1
    ['Học từ vựng về gia đình và mối quan hệ.', 'Learning vocabulary about family and relationships.'],
    ['Từ vựng về công việc và nghề nghiệp.', 'Vocabulary about jobs and occupations.'],
    ['Từ vựng về hoạt động hàng ngày.', 'Vocabulary about daily activities.'],
    ['Từ vựng về sở thích và thói quen.', 'Vocabulary about hobbies and habits.'],
    ['Từ vựng về thời gian và lịch trình.', 'Vocabulary about time and schedules.'],
    ['Từ vựng về phương tiện giao thông.', 'Vocabulary about transportation.'],
    ['Từ vựng về mua sắm và giá cả.', 'Vocabulary about shopping and prices.'],
    ['Ôn tập từ vựng Unit 1.', 'Review of Unit 1 vocabulary.'],

    // Unit 2
    ['Từ vựng về sức khỏe và cơ thể.', 'Vocabulary about health and the body.'],
    ['Từ vựng về bệnh tật và triệu chứng.', 'Vocabulary about illnesses and symptoms.'],
    ['Từ vựng về thời tiết và khí hậu.', 'Vocabulary about weather and climate.'],
    ['Từ vựng về thiên nhiên và môi trường.', 'Vocabulary about nature and the environment.'],
    ['Từ vựng về du lịch và địa điểm.', 'Vocabulary about travel and places.'],
    ['Từ vựng về nhà cửa và nội thất.', 'Vocabulary about houses and furniture.'],
    ['Từ vựng về thực phẩm và nấu ăn.', 'Vocabulary about food and cooking.'],
    ['Ôn tập từ vựng Unit 2.', 'Review of Unit 2 vocabulary.'],
    ['Bài kiểm tra nhỏ Unit 2.', 'Mini-test for Unit 2.'],

    // Unit 3
    ['Từ vựng về trường học và giáo dục.', 'Vocabulary about school and education.'],
    ['Từ vựng về môn học và dụng cụ học tập.', 'Vocabulary about subjects and school supplies.'],
    ['Từ vựng về kỳ thi và đánh giá.', 'Vocabulary about exams and evaluations.'],
    ['Từ vựng về hoạt động ngoại khóa.', 'Vocabulary about extracurricular activities.'],
    ['Bài kiểm tra nhỏ Unit 3.', 'Mini-test for Unit 3.'],

    // Unit 4
    ['Từ vựng về công nghệ và thiết bị.', 'Vocabulary about technology and devices.'],
    ['Từ vựng về internet và mạng xã hội.', 'Vocabulary about the internet and social media.'],
    ['Từ vựng về công việc văn phòng.', 'Vocabulary about office work.'],
    ['Từ vựng về giao tiếp qua điện thoại.', 'Vocabulary about phone communication.'],
    ['Từ vựng về sự kiện và lễ hội.', 'Vocabulary about events and festivals.'],
    ['Từ vựng về văn hóa và phong tục.', 'Vocabulary about culture and customs.'],
    ['Ôn tập từ vựng Unit 4.', 'Review of Unit 4 vocabulary.'],

    // Unit 5
    ['Từ vựng về thể thao và giải trí.', 'Vocabulary about sports and entertainment.'],
    ['Từ vựng về âm nhạc và nghệ thuật.', 'Vocabulary about music and art.'],
    ['Từ vựng về phim ảnh và truyền hình.', 'Vocabulary about movies and television.'],
    ['Từ vựng về sách và văn học.', 'Vocabulary about books and literature.'],
    ['Từ vựng về trò chơi và hoạt động nhóm.', 'Vocabulary about games and group activities.'],
    ['Từ vựng về kỳ nghỉ và thư giãn.', 'Vocabulary about vacations and relaxation.'],
    ['Từ vựng về cảm xúc và tâm trạng.', 'Vocabulary about emotions and moods.'],
    ['Ôn tập từ vựng Unit 5.', 'Review of Unit 5 vocabulary.'],

    // Katakana
    ['Học bảng chữ Katakana cơ bản (phần 1).', 'Learning basic Katakana (part 1).'],

    // Unit 7
    ['Từ vựng về kinh tế và tài chính.', 'Vocabulary about economy and finance.'],
    ['Từ vựng về ngân hàng và tiền tệ.', 'Vocabulary about banking and currency.'],
    ['Từ vựng về mua bán và giao dịch.', 'Vocabulary about buying, selling, and transactions.'],
    ['Ôn tập từ vựng Unit 7.', 'Review of Unit 7 vocabulary.'],

    // Unit 8
    ['Từ vựng về pháp luật và quy định.', 'Vocabulary about law and regulations.'],
    ['Từ vựng về an ninh và an toàn.', 'Vocabulary about security and safety.'],
    ['Từ vựng về chính trị và xã hội.', 'Vocabulary about politics and society.'],
    ['Ôn tập từ vựng Unit 8.', 'Review of Unit 8 vocabulary.'],

    // Unit 9
    ['Từ vựng về khoa học và nghiên cứu.', 'Vocabulary about science and research.'],
    ['Từ vựng về y học và chăm sóc sức khỏe.', 'Vocabulary about medicine and healthcare.'],
    ['Từ vựng về môi trường và năng lượng.', 'Vocabulary about the environment and energy.'],
    ['Từ vựng về kỹ thuật và công nghệ.', 'Vocabulary about engineering and technology.'],
    ['Từ vựng về phát minh và sáng tạo.', 'Vocabulary about inventions and creativity.'],
    ['Ôn tập từ vựng Unit 9.', 'Review of Unit 9 vocabulary.'],

    // Unit 10
    ['Từ vựng về giao tiếp và xã giao.', 'Vocabulary about communication and socializing.'],
    ['Từ vựng về lời mời và từ chối.', 'Vocabulary about invitations and refusals.'],
    ['Từ vựng về lời khuyên và đề nghị.', 'Vocabulary about advice and suggestions.'],
    ['Từ vựng về tranh luận và ý kiến.', 'Vocabulary about debates and opinions.'],
    ['Từ vựng về cảm ơn và xin lỗi.', 'Vocabulary about thanking and apologizing.'],
    ['Từ vựng về kế hoạch và dự định.', 'Vocabulary about plans and intentions.'],
    ['Từ vựng về kinh nghiệm và ký ức.', 'Vocabulary about experiences and memories.'],
    ['Ôn tập từ vựng Unit 10.', 'Review of Unit 10 vocabulary.'],

    // Katakana
    ['Học bảng chữ Katakana cơ bản (phần 2).', 'Learning basic Katakana (part 2).'],

    // Unit 11
    ['Bài kiểm tra nhỏ Unit 11.', 'Mini-test for Unit 11.'],

    // Unit 12
    ['Từ vựng về thói quen và lối sống.', 'Vocabulary about habits and lifestyles.'],
    ['Từ vựng về mục tiêu và ước mơ.', 'Vocabulary about goals and dreams.'],
    ['Từ vựng về thành công và thất bại.', 'Vocabulary about success and failure.'],
    ['Ôn tập từ vựng Unit 12.', 'Review of Unit 12 vocabulary.'],
  ];

  // Seed N3 (dựa trên số lượng bài trong mảng descriptions)
  for (let i = 0; i < descriptions.length; i++) {
    const lesson_number = i + 1;
    const [description_vi, description_en] = descriptions[i];

    const exists = await lessonRepo.findOne({
      where: { lesson_number, level: 'N3' },
    });

    if (!exists) {
      const lesson = lessonRepo.create({
        lesson_number,
        level: 'N3',
        description_vi,
        description_en,
        category: n3,
      });
      await lessonRepo.save(lesson);
    }
  }

  console.log('✅ Seeded lessons for N3!');
  process.exit(0);
}

seedLessons().catch((err) => {
  console.error('❌ Failed to seed lessons:', err);
  process.exit(1);
});