import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany
} from 'typeorm';
import { CustomVocabEntry } from './CustomVocabEntry.entity';

@Entity()
export class CustomVocabSet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => CustomVocabEntry, entry => entry.vocabSet)
  entries: CustomVocabEntry[];
}
