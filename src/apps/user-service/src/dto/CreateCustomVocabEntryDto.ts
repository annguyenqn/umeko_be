import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID, IsInt, Min } from 'class-validator';

export class CreateCustomVocabEntryDto {

  @ApiProperty()
  @IsUUID()
  userId: string; 

  @ApiProperty()
  @IsUUID()
  vocabSetId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  word: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  meaning: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  example?: string;

  @ApiProperty({ default: 1 })
  @IsOptional()
  @IsInt()
  @Min(1)
  difficulty_level?: number;
}
