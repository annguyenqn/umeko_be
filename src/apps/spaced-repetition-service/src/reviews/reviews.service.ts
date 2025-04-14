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

  async initReview(userId: string, vocabId: string) {
    try {
      const existing = await this.reviewModel.findOne({ userId, vocabId });
      if (existing) return existing;

      const now = new Date();
      const nextReview = new Date(now);
      nextReview.setDate(now.getDate() + 1);

      const createdReview = await this.reviewModel.create({
        userId,
        vocabId,
        repetitionCount: 0,
        efFactor: 2.5,
        interval: 1,
        lastReview: now,
        nextReview,
        lastResult: 'init',
      });

      const payload = {
        userId,
        vocabId,
        result: 'again', 
        reviewDate: now.toISOString(),
        learningStatus: 'new',
        reset: false,   
      };

      this.userClient.emit('review.update', payload);
      console.log('[RabbitMQ Emit] review.update sent (initReview):', payload);

      return createdReview;
    } catch (error) {
      console.error('❌ Error in initReview:', error);
      throw error;
    }
  }

  async review(userId: string, vocabId: string, result: ReviewResult) {
    try {
      const review = await this.reviewModel.findOne({ userId, vocabId });
      if (!review) throw new Error('Review not found');

      const newState = calculateNextReview(result, {
        repetitionCount: review.repetitionCount,
        interval: review.interval,
        efFactor: review.efFactor,
      });

      const now = new Date();
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
        reset: newState.reset
      };

      this.userClient.emit('review.update', payload);
      console.log('[RabbitMQ Emit] review.update sent (review):', payload);

      return review;
    } catch (error) {
      console.error('❌ Error in review:', error);
      throw error;
    }
  }
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
  
async getFlexibleReviews(userId: string, limit = 20) {
  const now = new Date();

  const reviews = await this.reviewModel
    .find({
      userId,
      nextReview: { $gt: now }, 
    })
    .sort({ nextReview: 1 })
    .limit(limit);

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
