import {
    Entity, PrimaryGeneratedColumn, Column,
    OneToMany
  } from 'typeorm';
import { Lesson } from './Lesson.entity';
  
  @Entity()
  export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ length: 50 })
    name: string;
  
    @Column({ nullable: true, length: 255 })
    description_vi: string;

    @Column({ nullable: true, length: 255 })
    description_en: string;
  
    @OneToMany(() => Lesson, lesson => lesson.category)
    lessons: Lesson[];
  }
  