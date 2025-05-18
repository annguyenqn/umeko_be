import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from './schemas/notification.schema';
import { NotificationGateway } from './notification.gateway';
@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name) 
    private notificationModel: Model<Notification>,
    private readonly gateway: NotificationGateway,
  ) {}

 // 🎯 Tạo và gửi thông báo
  async createAndSend(data: {
    userId: string;
    type: string;
    content: string;
  }) {
    const notification = await this.notificationModel.create({
      userId: data.userId,
      type: data.type,
      content: data.content,
      status: 'sent',
      read: false,
    });

    // Nếu user đang online → gửi WebSocket
    if (this.gateway.isUserOnline(data.userId)) {
      this.gateway.sendNotification(data.userId, notification);
    }
  }

  // 📚 Lấy các thông báo chưa đọc
  async getUnreadByUser(userId: string) {
    return this.notificationModel
      .find({ userId, read: false })
      .sort({ createdAt: -1 })
      .lean();
  }

  // ✅ Đánh dấu đã đọc
  async markAsRead(notificationId: string) {
    return this.notificationModel.findByIdAndUpdate(notificationId, {
      read: true,
    });
  }

}
