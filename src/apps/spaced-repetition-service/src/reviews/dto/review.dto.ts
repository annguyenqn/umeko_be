// dto/review.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class InitReviewDto {
  @ApiProperty({ example: 'user-123' })
  userId: string;

  @ApiProperty({ example: 'vocab-456' })
  vocabId: string;
}

export class SubmitReviewDto {
  @ApiProperty({ example: 'user-123' })
  userId: string;

  @ApiProperty({ example: 'vocab-456' })
  vocabId: string;

  @ApiProperty({ enum: ['again', 'hard', 'easy'], example: 'again' })
  result: 'again' | 'hard' | 'easy';
}
