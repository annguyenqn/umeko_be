import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_progress')
export class UserProgress {
  @PrimaryColumn('uuid')
  userId: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ default: 0 })
  totalWordsLearned: number;

  @Column({ default: 0 })
  totalReviews: number;

  @Column({ type: 'timestamp', nullable: true })
  lastReview: Date;
}
