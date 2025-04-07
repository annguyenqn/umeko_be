import {
    Entity, PrimaryGeneratedColumn, Column,
    OneToMany, ManyToMany, JoinTable
  } from 'typeorm';
import { VocabExample } from './VocabExample.entity';
import { Lesson } from './Lesson.entity';
import { Kanji } from './Kanji.entity';
  
  @Entity()
  export class Vocabulary {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ unique: true })
    vocab: string;
  
    @Column({ nullable: true })
    furigana: string;
  
    @Column('text')
    mean_vi: string;
  
    @Column('text')
    mean_en: string;

    @Column({ nullable: true })
    image_link: string;

    @Column({ nullable: true })
    sound_link: string;

    @Column({ nullable: true })
    word_type: string;
  
    @OneToMany(() => VocabExample, example => example.vocab)
    examples: VocabExample[];
  
    @ManyToMany(() => Lesson, lesson => lesson.vocabularies)
    @JoinTable({ name: 'vocab_lesson' })
    lessons: Lesson[];
  
    @ManyToMany(() => Kanji, kanji => kanji.vocabularies)
    @JoinTable({ name: 'vocab_kanji' })
    kanjis: Kanji[];
  }
  