// review.controller.ts
import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { ApiTags, ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { InitReviewDto, SubmitReviewDto } from './dto/review.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ReviewResult } from 'libs/spaced-repetition';
@ApiTags('Review')
@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @MessagePattern('review.initReview')
  @ApiBody({ type: InitReviewDto })
  async init(@Payload() data: { userId: string; vocabId: string }) {
    console.log('📩 Received review.initReview:', data);
    return this.reviewService.initReview(data.userId, data.vocabId);
  }

  @MessagePattern('review.submitReview')
  async handleSubmitReview(@Payload() data: { userId: string; vocabId: string; result: ReviewResult }) {
    try {
      console.log('📩 Received review.submitReview:', data);
      return await this.reviewService.review(data.userId, data.vocabId, data.result);
    } catch (error) {
      console.error('🔥 Error inside handler review.submitReview:', error);
      throw error;
    }
  }

  @MessagePattern('review.getDue')
  async getDueReviews(
    @Payload() data: { userId: string; limit?: number }
  ) {
    const userId = data?.userId;
    const limit = data?.limit ?? 20;
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
