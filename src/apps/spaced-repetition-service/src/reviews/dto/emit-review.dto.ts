import { ApiProperty } from '@nestjs/swagger';

export class EmitReviewDueDto {
  @ApiProperty({ example: 'abc123', description: 'User ID cần gửi notification' })
  userId: string;

  @ApiProperty({ example: 5, description: 'Số từ cần ôn luyện' })
  count: number;
}
