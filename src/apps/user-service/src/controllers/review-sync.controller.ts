// src/controllers/review-sync.controller.ts
import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ReviewSyncService } from '../services/review-sync.service';
import { ReviewUpdateDto } from '@/dto/review.dto';
@Controller()
export class ReviewSyncController {
  private readonly logger = new Logger(ReviewSyncController.name);

  constructor(private readonly reviewSyncService: ReviewSyncService) {}

  @EventPattern('review.update')
  async handleReviewUpdate(@Payload() data: ReviewUpdateDto) {
    this.logger.log('📥 handleReviewUpdate called'); 
    this.logger.log(`📥 Received review.update: ${JSON.stringify(data)}`);
    await this.reviewSyncService.handleReviewUpdate(data);
  }
}
