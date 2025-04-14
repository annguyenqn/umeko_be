// review.controller.ts
import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { ApiTags, ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
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

  @Get('due/:userId')
  @ApiOperation({ summary: 'Lấy danh sách từ cần ôn cho người dùng' })
  @ApiParam({ name: 'userId', required: true, description: 'ID người dùng' })
  @ApiQuery({ name: 'limit', required: false, description: 'Giới hạn số từ trả về (default: 20)' })
  @ApiResponse({ status: 200, description: 'Danh sách từ cần ôn' })
  async getDueReviews(
    @Param('userId') userId: string,
    @Query('limit') limitParam?: string,
  ) {
    const limit = parseInt(limitParam ?? '20', 10);
    return this.reviewService.getDueReviews(userId, limit);
  }

  @Get('flexible/:userId')
  @ApiOperation({ summary: 'Lấy danh sách từ để ôn thêm (không theo spacing)' })
  @ApiParam({ name: 'userId', required: true, description: 'ID người dùng' })
  @ApiQuery({ name: 'limit', required: false, description: 'Số lượng từ trả về (mặc định: 20)' })
  @ApiResponse({ status: 200, description: 'Danh sách từ để ôn thêm' })
  async getFlexibleReviews(
    @Param('userId') userId: string,
    @Query('limit') limitParam?: string,
  ) {
    const limit = parseInt(limitParam ?? '20', 10);
    return this.reviewService.getFlexibleReviews(userId, limit);
  }
}
