import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './schemas/review.schema';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { calculateNextReview, ReviewResult } from 'src/libs/spaced-repetition';
import { Observable } from 'rxjs';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<Review>,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('VOCAB_SERVICE') private readonly vocabClient: ClientProxy,
  ) {}

  async initReview(userId: string, vocabId: string) {
    const existing = await this.reviewModel.findOne({ userId, vocabId });
    if (existing) return existing;

    const now = new Date();
    const nextReview = new Date(now);
    nextReview.setDate(now.getDate() + 1); 

    return this.reviewModel.create({
      userId,
      vocabId,
      repetitionCount: 0,
      efFactor: 2.5,
      interval: 1,
      lastReview: now,
      nextReview,
      lastResult: 'init',
    });
  }

  async review(userId: string, vocabId: string, result: ReviewResult) {
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
    return review;
  }

}
