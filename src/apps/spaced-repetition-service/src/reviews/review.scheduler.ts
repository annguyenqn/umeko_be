import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './schemas/review.schema';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Injectable()
export class ReviewScheduler implements OnModuleInit {
  private readonly logger = new Logger(ReviewScheduler.name);

  constructor(
    @InjectModel(Review.name) private readonly reviewModel: Model<Review>,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  // Tạo index hỗ trợ query nhanh
  async onModuleInit() {
    await this.reviewModel.collection.createIndex({ userId: 1, nextReview: 1, notified: 1 });
    this.logger.log('Index created for reviewModel (userId, nextReview, notified)');
  }

  // Cron job: mỗi 2 phút check từ đến hạn
  @Cron('*/2 * * * *')
  async checkDueReviews() {
    const now = new Date();

    // Gom theo userId và đếm số từ đến hạn
    const dueReviews = await this.reviewModel.aggregate([
      {
        $match: {
          nextReview: { $lte: now },
          notified: { $ne: true },
        },
      },
      {
        $group: {
          _id: '$userId',
          count: { $sum: 1 },
        },
      },
    ]);

    // Gửi sự kiện qua RabbitMQ và đánh dấu đã thông báo
    for (const review of dueReviews) {
      const userId = review._id;
      const count = review.count;

      // Gửi event tới user-service
      this.userClient.emit('review.due', { userId, count });

      // Đánh dấu notified = true cho các bản ghi đã gửi
      await this.reviewModel.updateMany(
        { userId, nextReview: { $lte: now }, notified: { $ne: true } },
        { $set: { notified: true } },
      );

      this.logger.log(`📢 Sent review.due for user ${userId} with ${count} items.`);
    }
  }
}
