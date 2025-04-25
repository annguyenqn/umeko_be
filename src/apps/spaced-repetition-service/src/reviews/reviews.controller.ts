// review.controller.ts
import { Controller,UseInterceptors   } from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { ApiTags, } from '@nestjs/swagger';
// import { InitReviewDto, SubmitReviewDto } from './dto/review.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ReviewResult } from 'libs/spaced-repetition';
import { SpacedRepetitionInterceptor } from '@/common/interceptor/spaced-repetition.interceptor';
import { ReviewSnapshot } from './dto/review.dto';
@ApiTags('Review')
@Controller('review')
// @UseInterceptors(SpacedRepetitionInterceptor)
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @MessagePattern('review.initReviews')
  async handleInitReviews(@Payload() data: { userId: string; vocabIds: string[] }) {
    console.log('📩 Received review.initReviews:', data);
    return this.reviewService.initReviews(data.userId, data.vocabIds);
  }

  @MessagePattern('review.submitReviews')
  async handleSubmitReviews(
    @Payload() data: { userId: string; reviews: { vocabId: string; result: ReviewResult }[] },
  ) {
    console.log('📩 Received review.submitReviews:', data);
    return this.reviewService.reviewMany(data.userId, data.reviews);
  }
  
  @MessagePattern('review.rollback.create')
  async handleRollbackCreate(@Payload() data: { userId: string; vocabIds: string[] }) {
    try {
      await this.reviewService.rollbackCreatedReviews(data.userId, data.vocabIds);
      return { success: true };
    } catch (error) {
      console.error('❌ Failed rollbackCreatedReviews:', error);
      return { success: false };
    }
  }

  @MessagePattern('review.rollback.update')
async handleRollbackUpdate(@Payload() data: { userId: string; snapshot: ReviewSnapshot[] }) {
  try {
    await this.reviewService.restoreSnapshot(data.userId, data.snapshot);
    return { success: true };
  } catch (error) {
    console.error('❌ Failed restoreSnapshot:', error);
    return { success: false};
  }
}

  

  @MessagePattern('review.getDue')
  async getDueReviews(
    @Payload() data: { userId: string; limit?: number }
  ) {
    const userId = data?.userId;
    const limit = data?.limit;
    return this.reviewService.getDueReviews(userId, limit);
  }

  @MessagePattern('review.getFlexible')
  async handleFlexible(@Payload() data: { userId: string; limit?: number }) {
    console.log('🎯 [MQ] review.getFlexible triggered:', data);

    const userId = data?.userId;
    const limit = data?.limit ?? 20;

    return this.reviewService.getFlexibleReviews(userId, limit);
  }
}
