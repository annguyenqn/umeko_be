import { Controller, Get, Param } from '@nestjs/common';
import { VocabService } from '../services/vocab.service';

@Controller('vocab')
export class VocabController {
  constructor(private readonly vocabService: VocabService) {}

  @Get()
  findAll() {
    return this.vocabService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vocabService.findOne(id);
  }
}
