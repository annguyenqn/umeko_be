import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Role } from '../enums/role.enum';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  @Exclude()
  password: string;

  @Column({ type: 'varchar', nullable: true })
  @Exclude()
  refreshToken?: string | null;

  @Column({ type: 'varchar', nullable: true })
  firstName?: string;

  @Column({ type: 'varchar', nullable: true })
  lastName?: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: Role;

  @Column({ type: 'boolean', default: false })
  isEmailVerified: boolean;

  @Column({ type: 'varchar', nullable: true })
  @Exclude()
  passwordResetToken?: string | null;

  @Column({ type: 'timestamp', nullable: true })
  @Exclude()
  passwordResetExpires?: Date | null;

  @Column({ type: 'timestamp' })
  codeExpired: Date;

  @Column({ type: 'varchar', length: 10, nullable: true })
  codeId?: string;

  @Column({ type: 'boolean', default: false })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

  async validatePassword(password: string): Promise<boolean> {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (error) {
      return false;
    }
  }
}