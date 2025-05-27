import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  BadRequestException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomVocabSet } from '@/entities/CustomVocabSet.entity';
import { CustomVocabEntry } from '@/entities/CustomVocabEntry.entity';
import { CreateCustomVocabEntryDto } from '@/dtos/create-custom-vocab-entry.dto';
import { CreateCustomVocabSetDto } from '@/dtos/create-custom-vocab-set.dto';

@Injectable()
export class CustomVocabService {
  constructor(
    @InjectRepository(CustomVocabSet)
    private readonly setRepo: Repository<CustomVocabSet>,
    @InjectRepository(CustomVocabEntry)
    private readonly entryRepo: Repository<CustomVocabEntry>
  ) {}

  async createVocabSet(userId: string, dto: CreateCustomVocabSetDto) {
    try {
      const set = this.setRepo.create({ ...dto, user_id: userId });
      return await this.setRepo.save(set);
    } catch (error) {
      throw new InternalServerErrorException('Không thể tạo bộ từ vựng');
    }
  }

  async getUserSets(userId: string) {
    try {
      return await this.setRepo.find({
        where: { user_id: userId },
        relations: ['entries'],
      });
    } catch (error) {
      throw new InternalServerErrorException('Không thể lấy danh sách bộ từ');
    }
  }

  async createVocabEntry(userId: string, dto: CreateCustomVocabEntryDto) {
    try {
      const setExists = await this.setRepo.findOne({
        where: { id: dto.vocabSetId, user_id: userId },
      });
      if (!setExists) {
        throw new NotFoundException('Không tìm thấy bộ từ vựng này');
      }

      const entry = this.entryRepo.create({
        ...dto,
        user_id: userId,
        vocabSet: { id: dto.vocabSetId },
      });
      return await this.entryRepo.save(entry);
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Không thể tạo từ vựng mới');
    }
  }

  async getEntriesBySet(setId: string) {
    try {
      console.log('set id ');
      
      const entries = await this.entryRepo.find({
        where: { vocabSet: { id: setId } },
        order: { created_at: 'DESC' },
      });

      if (!entries || entries.length === 0) {
        throw new NotFoundException('Không tìm thấy từ nào trong bộ này');
      }

      return entries;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Không thể lấy danh sách từ');
    }
  }
}
