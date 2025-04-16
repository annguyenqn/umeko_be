import { BadGatewayException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/entities/user.entity';
import * as dayjs from 'dayjs'
import { CodeAuthDto } from '../dto/code-auth.dto';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserVocab } from '@/entities/user-vocab.entity';
import { UserReviewHistory } from '@/entities/user-review-history.entity';
import { UserProgress } from '@/entities/user-progress.entity';
import { firstValueFrom } from 'rxjs';
import { ReviewResult } from '@/types/ReviewResult';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserVocab)
    private readonly userVocabRepository: Repository<UserVocab>,
    @InjectRepository(UserReviewHistory)
    private readonly userReviewHistoryRepository: Repository<UserReviewHistory>,
    @InjectRepository(UserProgress)
    private readonly userProgressRepository: Repository<UserProgress>,
    @Inject('VOCAB_SERVICE') 
    private readonly vocabClient: ClientProxy,
    @Inject('SPACED_REPETITION_SERVICE')
    private readonly spacedRepetitionClient: ClientProxy,
  ) {}

  async getFullUserInfo(userId: string) {
    try {
      const user = await this.userRepository.findOne({
        where: { id: userId },
        select: ['id', 'firstName', 'lastName'],
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      const [vocab, reviewHistory, progress] = await Promise.all([
        this.userVocabRepository.find({ where: { userId } }),
        this.userReviewHistoryRepository.find({ where: { userId } }),
        this.userProgressRepository.findOne({ where: { userId } }),
      ]);

      return {
        user,
        vocab,
        reviewHistory,
        progress,
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to get user info');
    }
  }

  async getUserVocabDetails(userId: string) {
    // 1. Lấy danh sách vocabId mà user đang học
    const userVocabList = await this.userVocabRepository.find({
      where: { userId },
    });

    const vocabIds = userVocabList.map((item) => item.vocabId);
    if (vocabIds.length === 0) return { vocabList: [], total: 0 };

    // 2. Gửi qua RabbitMQ để lấy chi tiết từ vựng
    const vocabDetails = await firstValueFrom(
      this.vocabClient.send('vocab.getManyByIds', vocabIds),
    );

    return {
      vocabList: vocabDetails,
      total: vocabDetails.length,
    };
  }

  async findAll() {
    const users = await this.userRepository.find({
      select: [
        'id',
        'email',
        'firstName',
        'lastName',
        'isEmailVerified',
        'createdAt',
        'updatedAt',
      ],
    });

    if (!users.length) {
      throw new NotFoundException('No users found in the system');
    }

    return users;
  }

  async findById(id: string) {
    const user = await this.userRepository.findOne({ 
      where: { id },
      select: [
        'id',
        'email',
        'firstName',
        'lastName',
        'isEmailVerified',
        'createdAt',
        'updatedAt',
      ],
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async handleActive(data: CodeAuthDto): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { id: data._id },
    });

    if (!user) {
      throw new BadGatewayException('The code is invalid or expired');
    }

    //check expire code
    const isBeforeCheck = dayjs().isBefore(user.codeExpired);
    if (isBeforeCheck) {
      await this.userRepository.update({ id: data._id }, { isActive: true });
      return { isBeforeCheck };
    } else {
      throw new BadGatewayException('The code is invalid or expired');
    }
  }

    // Gọi sang spaced-repetition để lấy các từ đến hạn review
    async getDueReviewVocab(userId: string, limit = 20) {
      const payload = { userId, limit };
      return await firstValueFrom(
        this.spacedRepetitionClient.send('review.getDue', payload),
      );
    }
  
    // Gọi sang spaced-repetition để lấy các từ ôn tự do (chưa đến hạn)
    async getFlexibleReviewVocab(userId: string, limit = 20) {
      const payload = { userId, limit };
      return await firstValueFrom(
        this.spacedRepetitionClient.send('review.getFlexible', payload),
      );
    }

     // Gọi sang spaced-repetition để khởi tạo review lần đầu
  async initUserReview(userId: string, vocabId: string) {
    const payload = { userId, vocabId };
    console.log('📤 Sending to review.initReview:', payload);

    return await firstValueFrom(
      this.spacedRepetitionClient.send('review.initReview', payload),
    );
  }

  // Gọi sang spaced-repetition để xử lý kết quả review
  async submitReview(userId: string, vocabId: string, result: ReviewResult) {
    const payload = { userId, vocabId, result };
    console.log('📤 Sending to review.submitReview:', payload);

    return await firstValueFrom(
      this.spacedRepetitionClient.send('review.submitReview', payload),
    );
  }

} 