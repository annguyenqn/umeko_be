import {
  Controller, Post, Body, Get, Param
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { CustomVocabService } from '../service/custom-vocab.service';
import { CreateCustomVocabEntryDto } from '@/dtos/create-custom-vocab-entry.dto';
import { CreateCustomVocabSetDto } from '@/dtos/create-custom-vocab-set.dto';

@ApiTags('Custom Vocab')
@ApiBearerAuth()
@Controller('custom-vocab')
export class CustomVocabController {
  constructor(private readonly service: CustomVocabService) {}

  @Post('sets')
  createSet(@Body() dto: CreateCustomVocabSetDto) {
    return this.service.createVocabSet(dto.userId, dto);
  }

  @Get('sets/:userId')
  getUserSets(@Param('userId') userId: string) {
    return this.service.getUserSets(userId);
  }

  @Post('entries')
  createEntry(@Body() dto: CreateCustomVocabEntryDto) {
    return this.service.createVocabEntry(dto.userId, dto);
  }

  @Get('entries/:setId')
  getEntriesBySet(@Param('setId') setId: string) {
    return this.service.getEntriesBySet(setId);
  }
}
