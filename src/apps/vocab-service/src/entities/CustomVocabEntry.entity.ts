import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne
} from 'typeorm';
import { CustomVocabSet } from './CustomVocabSet.entity';

@Entity()
export class CustomVocabEntry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => CustomVocabSet, set => set.entries, { onDelete: 'CASCADE' })
  vocabSet: CustomVocabSet;

  @Column()
  word: string;

  @Column('text')
  meaning: string;

  @Column({ nullable: true })
  example: string;

  @Column({ default: 1 })
  difficulty_level: number;

  @CreateDateColumn()
  created_at: Date;
}
