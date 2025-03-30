import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn
  } from 'typeorm';
import { Kanji } from './Kanji.entity';
  
  @Entity()
  export class KanjiExample {
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
  
    @ManyToOne(() => Kanji, kanji => kanji.examples, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'kanji_id' })
    kanji: Kanji;
  }
  