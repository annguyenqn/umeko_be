import dataSourceSeed from '../dataSourceSeed';
import { Category } from '../entities/Category.entity';

async function seedCategories() {
  await dataSourceSeed.initialize();

  const categories = [
    {
      name: 'N5',
      description_vi: 'Trình độ sơ cấp – Giáo trình Minna no Nihongo N5',
      description_en: 'Beginner level – Minna no Nihongo N5 textbook',
    },
    {
      name: 'N4',
      description_vi: 'Trình độ sơ trung cấp – Giáo trình Minna no Nihongo N4',
      description_en: 'Lower intermediate – Minna no Nihongo N4 textbook',
    },
    {
      name: 'N3',
      description_vi: 'Trình độ trung cấp – Giáo trình Mimikara Oboeru N3',
      description_en: 'Intermediate level – Mimikara Oboeru N3 textbook',
    },
    {
      name: 'N2',
      description_vi: 'Trình độ trung cao cấp – Giáo trình Mimikara Oboeru N2',
      description_en: 'Upper-intermediate level – Mimikara Oboeru N2 textbook',
    }
  ];

  const repo = dataSourceSeed.getRepository(Category);
  for (const cat of categories) {
    const exists = await repo.findOne({ where: { name: cat.name } });
    if (!exists) {
      await repo.save(repo.create(cat));
    }
  }

  console.log('✅ Seeded categories!');
  process.exit(0);
}

seedCategories().catch((err) => {
  console.error('❌ Failed to seed categories:', err);
  process.exit(1);
});
