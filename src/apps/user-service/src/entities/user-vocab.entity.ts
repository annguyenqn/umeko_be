import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_vocab')
export class UserVocab {
  @PrimaryColumn({ type: 'uuid' })
  userId: string;

  @PrimaryColumn({ type: 'uuid' })
  vocabId: string;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'varchar', length: 20, nullable: true })
  learningStatus?: string;

  @Column({ type: 'timestamp', nullable: true })
  addedAt?: Date;
}