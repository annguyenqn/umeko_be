import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './schemas/review.schema';
import { ClientProxy } from '@nestjs/microservices';
import { calculateNextReview, ReviewResult } from 'libs/spaced-repetition';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<Review>,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('VOCAB_SERVICE') private readonly vocabClient: ClientProxy,
  ) {}

  async initReviews(userId: string, vocabIds: string[]) {
    try {
      const existingReviews = await this.reviewModel.find({
        userId,
        vocabId: { $in: vocabIds },
      });
  
      const existingVocabIds = new Set(existingReviews.map((r) => r.vocabId));
      const toCreate = vocabIds.filter((id) => !existingVocabIds.has(id));
  
      const now = new Date();
      const docsToInsert = toCreate.map((vocabId) => ({
        userId,
        vocabId,
        repetitionCount: 0,
        efFactor: 2.5,
        interval: 1,
        lastReview: now,
        nextReview: now,
        lastResult: 'init',
      }));
  
      if (docsToInsert.length > 0) {
        await this.reviewModel.insertMany(docsToInsert);
  
        docsToInsert.forEach((doc) => {
          const payload = {
            userId,
            vocabId: doc.vocabId,
            result: 'again',
            reviewDate: now.toISOString(),
            learningStatus: 'new',
            reset: false,
          };
          this.userClient.emit('review.update', payload);
          console.log('[RabbitMQ Emit] review.update sent (initReviews):', payload);
        });
      }
  
      return {
        inserted: docsToInsert.length,
        skipped: existingVocabIds.size,
        total: vocabIds.length,
      };
    } catch (error) {
      console.error('❌ Error in initReviews:', error);
      throw error;
    }
  }
  
  
  

  async reviewMany(userId: string, reviews: { vocabId: string; result: ReviewResult }[]) {
    try {
      const vocabIds = reviews.map(r => r.vocabId);
  
      const existingReviews = await this.reviewModel.find({
        userId,
        vocabId: { $in: vocabIds },
      });
  
      const now = new Date();
      const results = [];
      const skipped = [];
  
      for (const { vocabId, result } of reviews) {
        try {
          const review = existingReviews.find(r => r.vocabId === vocabId);
          if (!review) {
            console.warn(`⚠️ Review not found for vocabId ${vocabId}, skipping.`);
            skipped.push(vocabId);
            continue;
          }
  
          const safeEfFactor = isNaN(review.efFactor) ? 2.5 : review.efFactor;
          const safeInterval = review.interval ?? 1;
          const safeRepetition = review.repetitionCount ?? 0;
  
          const newState = calculateNextReview(result, {
            repetitionCount: safeRepetition,
            interval: safeInterval,
            efFactor: safeEfFactor,
          });
  
          const nextReview = new Date(now);
          nextReview.setDate(now.getDate() + newState.interval);
  
          review.repetitionCount = newState.repetitionCount;
          review.interval = newState.interval;
          review.efFactor = newState.efFactor;
          review.lastReview = now;
          review.nextReview = nextReview;
          review.lastResult = result;
  
          await review.save();
  
          const payload = {
            userId,
            vocabId,
            result,
            reviewDate: now.toISOString(),
            learningStatus: newState.learningStatus,
            reset: newState.reset,
          };
  
          this.userClient.emit('review.update', payload);
          console.log('[RabbitMQ Emit] review.update sent (reviewMany):', payload);
  
          results.push(review);
        } catch (innerErr) {
          console.error(`❌ Error processing vocabId ${vocabId}:`, innerErr);
          skipped.push(vocabId);
          continue;
        }
      }
  
      return {
        updated: results.length,
        total: reviews.length,
        skipped: skipped.length,
        failedVocabIds: skipped,
        reviews: results,
      };
    } catch (error) {
      console.error('❌ Error in reviewMany():', error);
      throw error;
    }
  }
  
  
  

  // thằng này lấy các từ vựng đến hạn ôn rồi, thường là mỗi ngày sẽ có 
  async getDueReviews(userId: string, limit = 20) {
    const now = new Date();

    // 1. Truy vấn các từ đến hạn review
    const reviews = await this.reviewModel
      .find({
        userId,
        nextReview: { $lte: now },
      })
      .sort({ nextReview: 1 })
      .limit(limit);

      console.log('Found reviews:', reviews.length);
      console.log(JSON.stringify(reviews, null, 2));

    const vocabIds = reviews.map((r) => r.vocabId);

    // 2. Gửi yêu cầu qua RabbitMQ để lấy chi tiết từ vựng
    const vocabDetails = await firstValueFrom(
      this.vocabClient.send('vocab.getManyByIds', vocabIds),
    );

    return {
      dueVocab: vocabDetails,
      reviewMeta: reviews,
    };
  }
  
  // thằng này ngược với thằng trên là lấy các từ vựng chưa tới hạn ôn ( để ôn thêm) 
  async getFlexibleReviews(userId: string, limit = 20) {
    console.log('🔥 getFlexibleReviews CALLED');
  const now = new Date();

  const reviews = await this.reviewModel
    .find({
      userId,
      nextReview: { $gt: now }, 
    })
    .sort({ nextReview: 1 })
    .limit(limit);
    console.log('✅ Found flexible reviews:', reviews.length);
  const vocabIds = reviews.map((r) => r.vocabId);

  const vocabDetails = await firstValueFrom(
    this.vocabClient.send('vocab.getManyByIds', vocabIds),
  );

  return {
    type: 'flexible',
    dueVocab: vocabDetails,
    reviewMeta: reviews,
  };
  }

}
