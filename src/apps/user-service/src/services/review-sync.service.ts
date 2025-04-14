import { Injectable } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserReviewHistory } from '../entities/user-review-history.entity';
import { UserProgress } from '../entities/user-progress.entity';
import { UserVocab } from '../entities/user-vocab.entity';

@Injectable()
export class ReviewSyncService {
  constructor(
    @InjectRepository(UserReviewHistory)
    private readonly reviewHistoryRepo: Repository<UserReviewHistory>,

    @InjectRepository(UserProgress)
    private readonly userProgressRepo: Repository<UserProgress>,

    @InjectRepository(UserVocab)
    private readonly userVocabRepo: Repository<UserVocab>,
  ) {
    console.log('🟢 ReviewSyncService initialized');
  }

  async handleReviewUpdate(@Payload() data: any) {
    console.log('[RabbitMQ Receive] Got message:', data);

    const { userId, vocabId, result, reviewDate, learningStatus  } = data;
    const status = learningStatus ?? 'new'; 


    try {
      // 1. Ghi lịch sử
      console.log('⏳ Saving to user_review_history...');
      await this.reviewHistoryRepo.save({
        userId,
        vocabId,
        reviewDate: new Date(reviewDate),
        result,
      });

      // 2. user_progress: tạo mới nếu chưa có
      console.log('⏳ Checking/creating user_progress...');
      const existingProgress = await this.userProgressRepo.findOne({ where: { userId } });

      if (!existingProgress) {
        await this.userProgressRepo.save({
          userId,
          totalReviews: 1,
          totalWordsLearned: 1, 
          lastReview: new Date(reviewDate),
        });
      } else {
        await this.userProgressRepo.increment({ userId }, 'totalReviews', 1);
        await this.userProgressRepo.increment({ userId }, 'totalWordsLearned', 1);
        await this.userProgressRepo.update({ userId }, { lastReview: new Date(reviewDate) });
      }

      // 3. user_vocab: tạo mới nếu chưa có
      console.log('⏳ Checking/creating user_vocab...');
      const existingVocab = await this.userVocabRepo.findOne({ where: { userId, vocabId } });

      if (!existingVocab) {
        await this.userVocabRepo.save({
          userId,
          vocabId,
          learningStatus,
          addedAt: new Date(reviewDate),
        });
      } else {
        await this.userVocabRepo.update({ userId, vocabId }, { learningStatus: status });
      }

      console.log('✅ All DB updates done.');
    } catch (err) {
      console.error('❌ Error during DB update:', err);
    }
  }
}
