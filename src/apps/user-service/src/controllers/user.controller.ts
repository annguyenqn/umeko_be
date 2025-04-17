import { Body, Controller, Get, Post, Query, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { UserService } from '@/services/user.service';
import { UserResponseDto } from '@/dto/user.dto';
import { ReviewResult } from '@/types/ReviewResult';
import { Request } from 'express';
@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me/details')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get current user full info' })
  @ApiResponse({ status: 200, description: 'Full user info' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getUserDetails(@Req() req: Request) {
    try {
      if (!req.user) throw new UnauthorizedException('User not found');
      const userId = req.user['id'];
      return await this.userService.getFullUserInfo(userId);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('me/vocab-details')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Lấy danh sách từ vựng của chính người dùng (dùng JWT)' })
  @ApiResponse({
    status: 200,
    description: 'Danh sách từ vựng của user hiện tại',
  })
  async getOwnVocabDetails(@Req() req: Request) {
    try {
      if (!req.user) throw new UnauthorizedException('User not found');
      const userId = req.user['id'];
      return await this.userService.getUserVocabDetails(userId);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('me/reviews/inits')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Khởi tạo nhiều review cho các từ vựng' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        vocabIds: {
          type: 'array',
          items: { type: 'string' },
        },
      },
      required: ['vocabIds'],
    },
  })
  async initReviews(@Req() req: Request, @Body() body: { vocabIds: string[] }) {
    if (!req.user) throw new UnauthorizedException('User not found');
    const userId = req.user['id'];
    return this.userService.initUserReviews(userId, body.vocabIds);
  }
  

  @UseGuards(JwtAuthGuard)
  @Post('me/reviews/submit-many')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Gửi nhiều kết quả ôn tập cùng lúc' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        reviews: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              vocabId: { type: 'string', example: 'a30f1c76-bf7d-xxxx' },
              result: {
                type: 'string',
                enum: ['again', 'hard', 'easy'],
                example: 'hard',
              },
            },
            required: ['vocabId', 'result'],
          },
        },
      },
      required: ['reviews'],
    },
  })
  async submitReviews(
    @Req() req: Request,
    @Body() body: { reviews: { vocabId: string; result: ReviewResult }[] },
  ) {
    if (!req.user) throw new UnauthorizedException('User not found');
    const userId = req.user['id'];
    return this.userService.submitReviews(userId, body.reviews);
  }
  

  @UseGuards(JwtAuthGuard)
  @Get('me/reviews/due')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Lấy từ vựng đến hạn ôn tập (spaced repetition)' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getDue(@Req() req: Request, @Query('limit') limit?: number) {
    if (!req.user) throw new UnauthorizedException('User not found');
    const userId = req.user['id'];
    return this.userService.getDueReviewVocab(userId, limit ?? 20);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me/reviews/flexible')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Lấy từ vựng ôn tự do (chưa đến hạn)' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getFlexible(@Req() req: Request, @Query('limit') limit?: number) {
    if (!req.user) throw new UnauthorizedException('User not found');
    const userId = req.user['id'];
    return this.userService.getFlexibleReviewVocab(userId, limit ?? 20);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'List of all users',
    type: [UserResponseDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getAllUsers() {
    return this.userService.findAll();
  }
} 