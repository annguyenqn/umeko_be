import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_vocab')
export class UserVocab {
  @PrimaryColumn({ name: 'user_id', type: 'uuid' })
  userId: string;

  @PrimaryColumn({ name: 'vocab_id', type: 'uuid' })
  vocabId: string;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'learning_status', type: 'varchar', length: 20, nullable: true })
  learningStatus?: string;

  @Column({ name: 'added_at', type: 'timestamp', nullable: true })
  addedAt?: Date;
}
