import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_review_history')
export class UserReviewHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({ type: 'uuid' })
  vocabId: string;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'timestamp' })
  reviewDate: Date;

  @Column({ type: 'varchar', length: 10 })
  result: string;

  @Column({ type: 'text', nullable: true })
  notes?: string;
}