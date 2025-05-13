import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_review_history')
export class UserReviewHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', type: 'uuid' }) // ✅ Thêm name
  userId: string;

  @Column({ name: 'vocab_id', type: 'uuid' }) // ✅ Thêm name
  vocabId: string;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' }) // ✅ Trùng với column
  user: User;

  @Column({ name: 'review_date', type: 'timestamp' }) // ✅ Thêm name
  reviewDate: Date;

  
@Column({
  name: 'next_review_date',
  type: 'timestamp',
  nullable: true, 
  default: null,  
})
nextReview: Date | null;



  @Column({ type: 'varchar', length: 10 })
  result: string;

  @Column({ type: 'text', nullable: true })
  notes?: string;
}
