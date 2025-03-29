import {
    Entity, PrimaryGeneratedColumn, Column,
    OneToMany, ManyToMany
  } from 'typeorm';
import { KanjiExample } from './KanjiExample.entity';
import { Vocabulary } from './Vocabulary.entity';
  
  @Entity()
  export class Kanji {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ length: 5, unique: true })
    kanji: string;
  
    @Column()
    han_viet: string;
  
    @Column({ nullable: true })
    radicals: string;
  
    @Column('int')
    strokes: number;
  
    @Column('text')
    meaning_vi: string;
  
    @Column('text')
    meaning_en: string;
  
    @Column('text', { array: true })
    on_reading: string[];
  
    @Column('text', { array: true })
    kun_reading: string[];
  
    @Column()
    level: string;
  
    @OneToMany(() => KanjiExample, example => example.kanji)
    examples: KanjiExample[];
  
    @ManyToMany(() => Vocabulary, vocab => vocab.kanjis)
    vocabularies: Vocabulary[];
  }
  