import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_progress')
export class UserProgress {
  @PrimaryColumn({ type: 'uuid' })
  userId: string;

  @OneToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'integer', default: 0 })
  totalWordsLearned: number;

  @Column({ type: 'integer', default: 0 })
  totalReviews: number;

  @Column({ type: 'timestamp', nullable: true })
  lastReview?: Date;
}