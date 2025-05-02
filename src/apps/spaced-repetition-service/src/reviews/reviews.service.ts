import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './schemas/review.schema';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { calculateNextReview, ReviewResult } from 'libs/spaced-repetition';
import { firstValueFrom } from 'rxjs';
import { SpacedRepetitionError } from '@/common/errors/spaced-repetition-error';
import { ReviewSnapshot } from './dto/review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<Review>,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('VOCAB_SERVICE') private readonly vocabClient: ClientProxy,
  ) {}



  async validateVocabIds(vocabIds: string[]) {
    try {
      const vocabDetails = await firstValueFrom(
        this.vocabClient.send('vocab.getManyByIds', vocabIds),
      );
      const foundIds = new Set(vocabDetails.map((v: { id: any; }) => v.id));
      const notFoundIds = vocabIds.filter(id => !foundIds.has(id));
  
      if (notFoundIds.length > 0) {
        throw new RpcException({
          message: `The following vocab IDs were not found: ${notFoundIds.join(', ')}`,
          error: 'VOCAB_NOT_FOUND',
          statusCode: 404,
        });
      }
  
      return vocabDetails;
    } catch (error) {
      if (error instanceof RpcException) {
        console.log('Caught RpcException:', error.getError());
        throw error;  // Trả lại RpcException gốc
      }
  
      console.log('Throwing new RpcException for non-Rpc error');
      throw new RpcException({
        message: error instanceof Error ? error.message : 'Unknown error',
        error: 'INTERNAL_SERVER_ERROR',
        statusCode: 500,
      });
    }
  }
  
  

  async initReviews(userId: string, vocabIds: string[]) {
    console.log('init review data ', userId, vocabIds);
  
    await this.validateVocabIds(vocabIds);
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
  
        // ✅ Emit một lần duy nhất
        const reviewPayloads = docsToInsert.map((doc) => ({
          vocabId: doc.vocabId,
          result: 'again',
          reviewDate: now.toISOString(),
          learningStatus: 'new',
        }));
  
        const payload = {
          userId,
          actionType: 'init',
          reviews: reviewPayloads,
        };
  
        this.userClient.emit('review.update', payload);
        console.log('[RabbitMQ Emit] review.update sent (initReviews):', payload);
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
      await this.validateVocabIds(vocabIds);
  
      const existingReviews = await this.reviewModel.find({
        userId,
        vocabId: { $in: vocabIds },
      });
  
      // 🔹 Snapshot trước khi update
      const snapshot = existingReviews.map((review) => ({
        vocabId: review.vocabId,
        repetitionCount: review.repetitionCount,
        interval: review.interval,
        efFactor: review.efFactor,
        lastReview: review.lastReview,
        nextReview: review.nextReview,
        lastResult: review.lastResult,
      }));
  
      const now = new Date();
      const updatedReviewsForEmit = [];
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
  
          updatedReviewsForEmit.push({
            vocabId,
            result,
            reviewDate: now.toISOString(),
            learningStatus: newState.learningStatus,
          });
        } catch (innerErr) {
          console.error(`❌ Error processing vocabId ${vocabId}:`, innerErr);
          skipped.push(vocabId);
          continue;
        }
      }
  
      // 🔹 Emit review.update dạng batch với actionType: 'update'
      const payload = {
        userId,
        actionType: 'update', // ✅ Bổ sung actionType
        reviews: updatedReviewsForEmit,
        snapshot, // ✅ Bổ sung snapshot cho rollback nếu lỗi
      };
  
      this.userClient.emit('review.update', payload);
      console.log('[RabbitMQ Emit] review.update sent (reviewMany):', payload);
  
      return {
        updated: updatedReviewsForEmit.length,
        total: reviews.length,
        skipped: skipped.length,
        failedVocabIds: skipped,
        reviews: existingReviews, // có thể là kết quả trước hoặc sau khi update
      };
    } catch (error) {
      console.error('❌ Error in reviewMany():', error);
      throw error;
    }
  }
  
  
  async rollbackCreatedReviews(userId: string, vocabIds: string[]) {
    try {
      await this.reviewModel.deleteMany({
        userId,
        vocabId: { $in: vocabIds },
      });
      console.log(`🔥 [Rollback] Deleted ${vocabIds.length} reviews for user ${userId}`);
    } catch (error) {
      console.error(`❌ [Rollback Error] Failed to delete reviews for user ${userId}:`, error);
    }
  }

  async restoreSnapshot(userId: string, snapshot: ReviewSnapshot[]) {
    try {
      for (const item of snapshot) {
        await this.reviewModel.updateOne(
          { userId, vocabId: item.vocabId },
          {
            $set: {
              repetitionCount: item.repetitionCount,
              interval: item.interval,
              efFactor: item.efFactor,
              lastReview: item.lastReview,
              nextReview: item.nextReview,
              lastResult: item.lastResult,
            },
          }
        );
      }
      console.log(`🌀 [Rollback] Restored ${snapshot.length} reviews for user ${userId}`);
    } catch (error) {
      console.error(`❌ [Rollback Error] Failed to restore snapshot for user ${userId}:`, error);
    }
  }
  
  
  

  // thằng này lấy các từ vựng đến hạn ôn rồi, thường là mỗi ngày sẽ có 
  async getDueReviews(userId: string, limit?: number) {
    const now = new Date();
  
    let query = this.reviewModel
      .find({ userId, nextReview: { $lte: now } })
      .sort({ nextReview: 1 });
  
    if (limit && limit > 0) {
      query = query.limit(limit);
    }
  
    const reviews = await query.exec();
  
    if (reviews.length === 0) {
      return { dueVocab: [], reviewMeta: [] };
    }
  
    const vocabIds = reviews.map(r => r.vocabId);
    const vocabDetails = await firstValueFrom(
      this.vocabClient.send('vocab.getManyByIds', vocabIds),
    );
  
    return {
      dueVocab: vocabDetails,
      reviewMeta: reviews,
      totalDue: reviews.length,
    };
  }
  
  
  
  // thằng này ngược với thằng trên là lấy các từ vựng chưa tới hạn ôn ( để ôn thêm) 
  async getFlexibleReviews(userId: string, limit = 20) {
    console.log('🔥 getFlexibleReviews CALLED');
    const now = new Date();
  
    const reviews = await this.reviewModel
      .find({
        userId,
        nextReview: { $gt: now }, // flexible = chưa đến hạn
      })
      .sort({ nextReview: 1 })
      .limit(limit);
  
    console.log('✅ Found flexible reviews:', reviews.length);
  
    // ✅ Nếu không có review nào → trả về rỗng
    if (reviews.length === 0) {
      return {
        type: 'flexible',
        dueVocab: [],
        reviewMeta: [],
      };
    }
  
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
