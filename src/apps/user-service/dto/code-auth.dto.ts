import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CodeAuthDto {
  @ApiProperty({})
  @IsNotEmpty()
  _id: string;

  @ApiProperty({})
  @IsString()
  @IsNotEmpty()
  code: string;
}
