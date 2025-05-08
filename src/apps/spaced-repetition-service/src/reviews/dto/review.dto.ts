// src/dto/review.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsString, ValidateNested } from 'class-validator';
import { ReviewResult, LearningStatus } from '@/common/types/Review.type';
export class InitReviewsDto {
  @ApiProperty({
    description: 'ID của người dùng muốn khởi tạo danh sách từ vựng cần ôn luyện',
    example: 'user_12345',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Danh sách các vocabId cần khởi tạo review',
    example: ['vocab_1', 'vocab_2', 'vocab_3'],
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  vocabIds: string[];
}

// export class SubmitReviewsDto {

//   @ApiProperty({
//     example: 'vocab-456',
//     description: 'ID của từ vựng mà người dùng đã review',
//   })
//   vocabId: string;

//   @ApiProperty({
//     enum: ['again', 'hard', 'easy'],
//     example: 'again',
//     description:
//       'Kết quả review, có thể là lại (again), khó (hard) hoặc dễ (easy)',
//   })
//   result: ReviewResult;
// }


export class SubmitReviewItemDto {
  @ApiProperty({ example: 'vocab_123' })
  @IsString()
  vocabId: string;

  @ApiProperty({ example: 'again', enum: ['again', 'hard', 'easy'], 
        description:
      'Kết quả review, có thể là lại (again), khó (hard) hoặc dễ (easy)',
   })
  @IsString()
  result: ReviewResult;

  @ApiProperty({ example: 'new', enum: ['new', 'learning', 'mastered', 'forgotten', 'graduated'] })
  @IsString()
  learningStatus: LearningStatus;
}

export class SubmitReviewsDto {
  @ApiProperty({ example: 'user_123' })
  @IsString()
  userId: string;

  @ApiProperty({ type: [SubmitReviewItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  reviews: SubmitReviewItemDto[];
}

export class ReviewSnapshot {
  vocabId: string;
  repetitionCount: number;
  interval: number;
  efFactor: number;
  lastReview: Date;
  nextReview: Date;
  lastResult: string;
}


export class ReviewUpdateDto {
  userId: string;
  actionType: 'init' | 'update';
  reviews: {
    vocabId: string;
    result: string;
    reviewDate: string;
    learningStatus?: string;
  }[];
  snapshot?: ReviewSnapshot[];
}
