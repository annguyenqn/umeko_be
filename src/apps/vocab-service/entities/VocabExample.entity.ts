import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn
  } from 'typeorm';
import { Vocabulary } from './Vocabulary.entity';
  
  @Entity()
  export class VocabExample {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    example_text: string;

    @Column({ nullable: true })
    furigana: string;
  
    @Column('text')
    meaning_vi: string;
  
    @Column('text')
    meaning_en: string;
  
    @ManyToOne(() => Vocabulary, vocab => vocab.examples, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'vocab_id' })
    vocab: Vocabulary;
  }
  