import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vocabulary } from '../entities/Vocabulary.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VocabService {
  constructor(
    @InjectRepository(Vocabulary)
    private readonly vocabRepo: Repository<Vocabulary>,
  ) {}

  async findAll(): Promise<Vocabulary[]> {
    return this.vocabRepo.find();
  }

  async findOne(id: string): Promise<Vocabulary | null> {
    return this.vocabRepo.findOne({ where: { id } });
  }
}
