// review.controller.ts
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags, } from '@nestjs/swagger';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { ReviewSnapshot } from './dto/review.dto';
import { InitReviewsDto, SubmitReviewsDto } from './dto/review.dto';
import { EmitReviewDueDto } from './dto/emit-review.dto';

@ApiTags('Review')
@Controller('review')
export class ReviewController {
  constructor(
    @Inject('NOTIFICATION_SERVICE') 
    private readonly notifyClient: ClientProxy,
    private readonly reviewService: ReviewService) {}


  @Post('emit-review-due')
  @ApiOperation({ summary: 'Emit review.due event manually for testing' })
  @ApiBody({ type: EmitReviewDueDto })
  @ApiResponse({ status: 201, description: 'Event emitted successfully' })
  emitReviewDue(@Body() body: EmitReviewDueDto) {
    console.log('🔥 Emitting review.due event manually...', body);
    this.notifyClient.emit('review.due', body);
    return { message: 'Event review.due emitted!' };
  }

  @MessagePattern('review.initReviews')
  async handleInitReviews(@Payload() data: InitReviewsDto) {
    return this.reviewService.initReviews(data.userId, data.vocabIds);
  }

  @MessagePattern('review.submitReviews')
  async handleSubmitReviews(
    @Payload() data: SubmitReviewsDto,
  ) {
    console.log('📩 Received review.submitReviews:', data);
    return this.reviewService.reviewMany(data);
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
