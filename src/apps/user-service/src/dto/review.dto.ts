// src/dto/review.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { ReviewResult } from '@/types/ReviewResult';
import { ArrayNotEmpty, IsArray, IsString } from 'class-validator';
export class InitReviewsDto {

  @ApiProperty({ 
    type: [String], 
    example: ['vocab-456', 'vocab-789'], 
    description: 'Danh sách các vocabIds mà người dùng muốn review' 
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true }) 
  vocabIds: string[];
}

export class SubmitReviewsDto {

  @ApiProperty({
    example: 'vocab-456',
    description: 'ID của từ vựng mà người dùng đã review',
  })
  vocabId: string;

  @ApiProperty({
    enum: ['again', 'hard', 'easy'],
    example: 'again',
    description:
      'Kết quả review, có thể là lại (again), khó (hard) hoặc dễ (easy)',
  })
  result: ReviewResult;
}
