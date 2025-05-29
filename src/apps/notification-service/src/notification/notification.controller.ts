// review.controller.ts
import { NotificationService } from './notification.service';
import { BadRequestException, Body, Controller, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Notification')
@Controller('Notification')
// @UseInterceptors(NotificationInterceptor)
export class NotificationController {
  constructor(private readonly  notificationService: NotificationService) {}
  @EventPattern('review.due')
  async handleReviewDue(@Payload() data: { userId: string; count: number }) {
    console.log(' rabbit review due notify');
    console.log(' rabbit review due notify data', data);

    await this.notificationService.createAndSend({
      userId: data.userId,
      content: `Bạn có ${data.count} từ cần ôn luyện!`,
      type: 'in-app',
    });
  }

  // 📤 FE gọi API này để lấy thông báo chưa đọc
  @Get()
  async getUnreadNotifications(@Query('userId') userId: string) {
    return this.notificationService.getUnreadByUser(userId);
  }


@Post('unread-bulk')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Đánh dấu nhiều thông báo là chưa đọc' })
@ApiBody({
  schema: {
    type: 'object',
    properties: {
      ids: {
        type: 'array',
        items: { type: 'string' },
        description: 'Danh sách ID thông báo cần đánh dấu là chưa đọc',
      },
    },
    required: ['ids'],
  },
})
@ApiResponse({
  status: 200,
  description: 'Đã đánh dấu các thông báo là chưa đọc',
})
async markAsUnreadBulk(@Body('ids') ids: string[]) {
  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    throw new BadRequestException('Danh sách ID không hợp lệ');
  }
  const result = await this.notificationService.markAsUnreadBulk(ids);
  return {
    message: 'Thông báo đã được đánh dấu là chưa đọc',
    modifiedCount: result.modifiedCount,
  };
}

}
