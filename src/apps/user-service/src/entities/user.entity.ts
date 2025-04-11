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

  @Column({ name: 'refresh_token', type: 'varchar', nullable: true })
  @Exclude()
  refreshToken?: string | null;
  
  @Column({ name: 'first_name', type: 'varchar', nullable: true })
  firstName?: string;
  
  @Column({ name: 'last_name', type: 'varchar', nullable: true })
  lastName?: string;
  
  @Column({ name: 'is_email_verified', type: 'boolean', default: false })
  isEmailVerified: boolean;
  
  @Column({ name: 'password_reset_token', type: 'varchar', nullable: true })
  @Exclude()
  passwordResetToken?: string | null;
  
  @Column({ name: 'password_reset_expires', type: 'timestamp', nullable: true })
  @Exclude()
  passwordResetExpires?: Date | null;
  
  @Column({ name: 'code_expired', type: 'timestamp' })
  codeExpired: Date;
  
  @Column({ name: 'code_id', type: 'varchar', length: 10, nullable: true })
  codeId?: string;
  
  @Column({ name: 'is_active', type: 'boolean', default: false })
  isActive: boolean;
  
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
  
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
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