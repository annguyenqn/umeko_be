import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserReviewHistory } from '../entities/user-review-history.entity';
import { UserProgress } from '../entities/user-progress.entity';
import { UserVocab } from '../entities/user-vocab.entity';
import { ReviewUpdateDto } from '@/dto/review.dto';

@Injectable()
export class ReviewSyncService {
  logger: any;
  constructor(
    @InjectRepository(UserReviewHistory)
    private readonly reviewHistoryRepo: Repository<UserReviewHistory>,

    @InjectRepository(UserProgress)
    private readonly userProgressRepo: Repository<UserProgress>,

    @InjectRepository(UserVocab)
    private readonly userVocabRepo: Repository<UserVocab>,
    @Inject('SPACED_REPETITION_SERVICE')
    private readonly spacedRepetitionClient: ClientProxy,
  ) {
    console.log('🟢 ReviewSyncService initialized');
  }

  async handleReviewUpdate(@Payload() data: ReviewUpdateDto) {
    const { userId, reviews, actionType, snapshot } = data;
  
    const reviewHistoryToInsert = [];
    const userVocabToInsert = [];
  
    try {
      const existingProgress = await this.userProgressRepo.findOne({ where: { userId } });
  
      for (const review of reviews) {
        const { vocabId, reviewDate, result, learningStatus } = review;
        const status = learningStatus ?? 'new';
  
        try {
          reviewHistoryToInsert.push({
            userId,
            vocabId,
            reviewDate: new Date(reviewDate),
            result,
          });
  
          const existingVocab = await this.userVocabRepo.findOne({ where: { userId, vocabId } });
  
          if (!existingVocab) {
            userVocabToInsert.push({
              userId,
              vocabId,
              learningStatus: status,
              addedAt: new Date(reviewDate),
            });
          } else {
            await this.userVocabRepo.update({ userId, vocabId }, { learningStatus: status });
          }
        } catch (vocabErr) {
          console.error(`❌ Error processing vocabId ${review.vocabId}:`, vocabErr);
          throw vocabErr; // trigger rollback outside
        }
      }
  
      if (reviewHistoryToInsert.length > 0) {
        await this.reviewHistoryRepo.save(reviewHistoryToInsert);
      }
  
      if (userVocabToInsert.length > 0) {
        await this.userVocabRepo.save(userVocabToInsert);
      }
  
      if (!existingProgress) {
        await this.userProgressRepo.save({
          userId,
          totalReviews: reviews.length,
          totalWordsLearned: reviews.length,
          lastReview: new Date(reviews[0].reviewDate),
        });
      } else {
        await this.userProgressRepo.increment({ userId }, 'totalReviews', reviews.length);
        await this.userProgressRepo.increment({ userId }, 'totalWordsLearned', reviews.length);
        await this.userProgressRepo.update({ userId }, { lastReview: new Date(reviews[0].reviewDate) });
      }
  
      console.log(`✅ Completed handling ${reviews.length} vocab(s) for user ${userId}`);
    } catch (err) {
      console.error('❌ Error during review update flow:', err);
  
      // ✅ Rollback ở đây, phân biệt init vs update
      if (actionType === 'init') {
         console.error('❌ Error during init review roolback this:');

        await this.spacedRepetitionClient.send('review.rollback.create', {
          userId,
          vocabIds: reviews.map((r) => r.vocabId),
        }).toPromise();
      } else if (actionType === 'update' && snapshot) {
        await this.spacedRepetitionClient.send('review.rollback.update', {
          userId,
          snapshot,
        }).toPromise();
      }
    }
  }
  
}
