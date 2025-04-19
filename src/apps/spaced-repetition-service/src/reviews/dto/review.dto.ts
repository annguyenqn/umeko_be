// src/dto/review.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class InitReviewDto {
  @ApiProperty({ 
    example: 'user-123',
    description: 'ID của người dùng đang thực hiện review' 
  })
  userId: string;

  @ApiProperty({ 
    example: 'vocab-456', 
    description: 'ID của từ vựng mà người dùng sẽ review' 
  })
  vocabId: string;
}

export class SubmitReviewDto {
  @ApiProperty({ 
    example: 'user-123',
    description: 'ID của người dùng đã hoàn thành review' 
  })
  userId: string;

  @ApiProperty({ 
    example: 'vocab-456', 
    description: 'ID của từ vựng mà người dùng đã review' 
  })
  vocabId: string;

  @ApiProperty({ 
    enum: ['again', 'hard', 'easy'], 
    example: 'again', 
    description: 'Kết quả review, có thể là lại (again), khó (hard) hoặc dễ (easy)' 
  })
  result: 'again' | 'hard' | 'easy';
}
