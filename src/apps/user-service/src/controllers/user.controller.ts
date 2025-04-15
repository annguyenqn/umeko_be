import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { UserService } from '@/services/user.service';
import { UserResponseDto } from '@/dto/user.dto';
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
      const userId = req.user['id'];
      return await this.userService.getFullUserInfo(userId);
    } catch (error) {
      console.error(error);
      throw error;
    }
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