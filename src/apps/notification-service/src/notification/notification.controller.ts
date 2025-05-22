// review.controller.ts
import { NotificationService } from './notification.service';
import { Controller, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

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


  @Post(':id/read')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Đánh dấu thông báo đã đọc' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID của thông báo cần đánh dấu là đã đọc',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Thông báo đã được đánh dấu là đã đọc',
  })
  @ApiResponse({
    status: 404,
    description: 'Không tìm thấy thông báo',
  })
  async markAsRead(@Param('id') id: string) {
    const updated = await this.notificationService.markAsRead(id);
    if (!updated) {
      // Trả về 404 nếu không tìm thấy
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }
    return updated;
  }
}
