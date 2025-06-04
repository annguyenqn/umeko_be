import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateCustomVocabSetDto } from '@/dto/createVocabCustom.dto';
import { CreateCustomVocabEntryDto } from '@/dto/CreateCustomVocabEntryDto';

@Injectable()
export class UserVocabCustomService {
  constructor(
    @Inject('VOCAB_SERVICE')
    private readonly vocabCustomClient: ClientProxy,
  ) {}

  async createCustomVocabSet(userId: string, dto: CreateCustomVocabSetDto) {
    const payload = { ...dto, userId };
    return await firstValueFrom(
      this.vocabCustomClient.send('custom-vocab.createSet', payload),
    );
  }

  async getCustomVocabSets(userId: string) {
    return await firstValueFrom(
      this.vocabCustomClient.send('custom-vocab.getSetsByUser', { userId }),
    );
  }

  async createCustomVocabEntry(userId: string, dto: CreateCustomVocabEntryDto) {
    const payload = { ...dto, userId };
    return await firstValueFrom(
      this.vocabCustomClient.send('custom-vocab.createEntry', payload),
    );
  }

  async getEntriesBySet(setId: string) {
    return await firstValueFrom(
      this.vocabCustomClient.send('custom-vocab.getEntriesBySet', { setId }),
    );
  }
}
