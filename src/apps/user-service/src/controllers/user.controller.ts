import { Body, Controller, Get, Post, Query, Req, UseGuards,UseInterceptors  } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { UserService } from '@/services/user.service';
import { UserResponseDto } from '@/dto/user.dto';
import { Request } from 'express';
import { UserInterceptor } from '@/common/interceptors/user.interceptor';
import { CustomError } from '@/common/errors/custom-error';
import { InitReviewRequestDto, SubmitReviewsRequestDto } from '@/dto/review.dto';
@ApiTags('Users')
@ApiBearerAuth()
@UseInterceptors(UserInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me/details')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get current user full info' })
  @ApiResponse({ status: 200, description: 'Full user info' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getUserDetails(@Req() req: Request) {
    if (!req.user) {
      throw new CustomError(401, 'USER_NOT_FOUND', 'User not found');
    }
    const userId = req.user['id'];
    return await this.userService.getFullUserInfo(userId);
  }

  @Get('me/vocab-details')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get user vocab details' })
  @ApiResponse({ status: 200, description: 'Vocabulary details for current user' })
  async getOwnVocabDetails(@Req() req: Request) {
    if (!req.user) {
      throw new CustomError(401, 'USER_NOT_FOUND', 'User not found');
    }
    const userId = req.user['id'];
    return await this.userService.getUserVocabDetails(userId);
  }

  @Post('me/reviews/inits')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Initialize reviews for vocab' })
  @ApiBody({ type: InitReviewRequestDto, required: true })
  @ApiResponse({ status: 200, description: 'Successfully initialized reviews' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Invalid vocabIds array' })
  async initReviews(@Req() req: Request, @Body() body: InitReviewRequestDto) {
    if (!req.user) {
      throw new CustomError(401, 'USER_NOT_FOUND', 'User not found');
    }
    if (!body.vocabIds) {
      throw new CustomError(401, 'USER_NOT_FOUND', 'User not found');
    }

    const userId = req.user['id'];
    return await this.userService.initUserReviews(userId, body.vocabIds);
  }

  @Post('me/reviews/submit-many')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Submit multiple review results for vocab' })
  @ApiBody({ type: [SubmitReviewsRequestDto], required: true })
  @ApiResponse({ status: 200, description: 'Reviews submitted successfully' })
  @ApiResponse({ status: 400, description: 'Invalid review data' })
  async submitReviews(
    @Req() req: Request,
    @Body() body:  SubmitReviewsRequestDto[]
  ) {
    if (!req.user) {
      throw new CustomError(401, 'USER_NOT_FOUND', 'User not found');
    }
    const userId = req.user['id'];
    return await this.userService.submitReviews(userId, body);
  }

  @Get('me/reviews/due')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get due review vocab' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getDue(@Req() req: Request, @Query('limit') limit?: number) {
    if (!req.user) {
      throw new CustomError(401, 'USER_NOT_FOUND', 'User not found');
    }
    const userId = req.user['id'];
    return await this.userService.getDueReviewVocab(userId, limit ?? 20);
  }

  @Get('me/reviews/flexible')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get flexible review vocab' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getFlexible(@Req() req: Request, @Query('limit') limit?: number) {
    if (!req.user) {
      throw new CustomError(401, 'USER_NOT_FOUND', 'User not found');
    }
    const userId = req.user['id'];
    return await this.userService.getFlexibleReviewVocab(userId, limit ?? 20);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'List of all users', type: [UserResponseDto] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getAllUsers() {
    return await this.userService.findAll();
  }
}