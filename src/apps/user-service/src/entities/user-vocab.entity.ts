import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_vocab')
export class UserVocab {
  @PrimaryColumn('uuid')
  userId: string;

  @PrimaryColumn('uuid')
  vocabId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'varchar', length: 20, nullable: true })
  learningStatus: string;

  @Column({ type: 'timestamp', nullable: true })
  addedAt: Date;
}
