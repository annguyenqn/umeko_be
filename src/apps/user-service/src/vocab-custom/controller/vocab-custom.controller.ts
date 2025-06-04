import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserVocabCustomService } from '../service/vocab-custom.service';
import { CreateCustomVocabSetDto } from '@/dto/createVocabCustom.dto';
import { CreateCustomVocabEntryDto } from '@/dto/CreateCustomVocabEntryDto';

@Controller('custom-vocab')
export class UserCustomVocabController {
  constructor(private readonly service: UserVocabCustomService) {}

  @Post('sets')
  async createSet(@Body() dto: CreateCustomVocabSetDto) {
    return this.service.createCustomVocabSet(dto.userId, dto);
  }

  @Get('sets/:userId')
  async getSets(@Param('userId') userId: string) {
    return this.service.getCustomVocabSets(userId);
  }

  @Post('entries')
  async createEntry(@Body() dto: CreateCustomVocabEntryDto) {
    return this.service.createCustomVocabEntry(dto.userId, dto);
  }

  @Get('entries/:setId')
  async getEntries(@Param('setId') setId: string) {
    return this.service.getEntriesBySet(setId);
  }
}
