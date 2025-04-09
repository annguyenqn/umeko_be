import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, ManyToMany, JoinColumn
  } from 'typeorm';
import { Category } from './Category.entity';
import { Vocabulary } from './Vocabulary.entity';
  
  @Entity()
  export class Lesson {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    lesson_number: number;
  
    @Column()
    level: string;
  
    @Column({ nullable: true, length: 255 })
    description_vi: string;

    @Column({ nullable: true, length: 255 })
    description_en: string;
  
    @ManyToOne(() => Category, category => category.lessons)
    @JoinColumn({ name: 'category_id' })
    category: Category;
  
    @ManyToMany(() => Vocabulary, vocab => vocab.lessons)
    vocabularies: Vocabulary[];
  }
  