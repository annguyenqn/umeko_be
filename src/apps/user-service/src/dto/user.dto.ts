import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from '../enums/role.enum';

export class UserResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  firstName?: string;

  @ApiPropertyOptional()
  lastName?: string;

  // @ApiProperty({ enum: Role })
  // role: Role;

  @ApiProperty()
  isEmailVerified: boolean;

  // @ApiProperty()
  // createdAt: Date;

  // @ApiProperty()
  // updatedAt: Date;
} 