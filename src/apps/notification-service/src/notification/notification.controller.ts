// review.controller.ts
import { NotificationService } from './notification.service';
import { ApiTags, } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';


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
}
