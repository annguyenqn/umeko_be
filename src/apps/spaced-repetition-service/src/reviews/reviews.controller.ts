// review.controller.ts
import { Controller,UseInterceptors   } from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { ApiTags, } from '@nestjs/swagger';
// import { InitReviewDto, SubmitReviewDto } from './dto/review.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ReviewResult } from 'libs/spaced-repetition';
import { SpacedRepetitionInterceptor } from '@/common/interceptor/spaced-repetition.interceptor';
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
