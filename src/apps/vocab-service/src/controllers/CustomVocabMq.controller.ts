import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CustomVocabService } from '@/vocab-custom/service/custom-vocab.service';
import { CreateCustomVocabEntryDto } from '@/dtos/create-custom-vocab-entry.dto';
import { CreateCustomVocabSetDto } from '@/dtos/create-custom-vocab-set.dto';

@Controller()
export class CustomVocabMqController {
  constructor(private readonly service: CustomVocabService) {}

  // [1] Tạo bộ từ vựng mới
  @MessagePattern('custom-vocab.createSet')
  async createSet(@Payload() dto: CreateCustomVocabSetDto) {
    return this.service.createVocabSet(dto.userId, dto);
  }

  // [2] Lấy tất cả bộ từ vựng của user
  @MessagePattern('custom-vocab.getSetsByUser')
  async getSetsByUser(@Payload() data: { userId: string }) {
    return this.service.getUserSets(data.userId);
  }

  // [3] Tạo từ vựng mới trong một bộ
  @MessagePattern('custom-vocab.createEntry')
  async createEntry(@Payload() dto: CreateCustomVocabEntryDto) {
    return this.service.createVocabEntry(dto.userId, dto);
  }

  // [4] Lấy các từ vựng theo bộ
  @MessagePattern('custom-vocab.getEntriesBySet')
  async getEntriesBySet(@Payload() data: { setId: string }) {
    return this.service.getEntriesBySet(data.setId);
  }
}
