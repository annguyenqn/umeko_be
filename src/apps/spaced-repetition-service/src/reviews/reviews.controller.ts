// review.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { InitReviewDto, SubmitReviewDto } from './dto/review.dto';

@ApiTags('Review')
@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post('init')
  @ApiBody({ type: InitReviewDto })
  async init(@Body() body: InitReviewDto) {
    return this.reviewService.initReview(body.userId, body.vocabId);
  }

  @Post('submit')
  @ApiBody({ type: SubmitReviewDto })
  async review(@Body() body: SubmitReviewDto) {
    return this.reviewService.review(body.userId, body.vocabId, body.result);
  }
}
