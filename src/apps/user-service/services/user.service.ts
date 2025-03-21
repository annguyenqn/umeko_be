import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    const users = await this.userRepository.find({
      select: [
        'id',
        'email',
        'firstName',
        'lastName',
        'role',
        'isEmailVerified',
        'createdAt',
        'updatedAt',
      ],
    });

    if (!users.length) {
      throw new NotFoundException('No users found in the system');
    }

    return users;
  }

  async findById(id: string) {
    const user = await this.userRepository.findOne({ 
      where: { id },
      select: [
        'id',
        'email',
        'firstName',
        'lastName',
        'role',
        'isEmailVerified',
        'createdAt',
        'updatedAt',
      ],
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }
} 