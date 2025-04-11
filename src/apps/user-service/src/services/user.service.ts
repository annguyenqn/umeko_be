import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/entities/user.entity';
import * as dayjs from 'dayjs'
import { CodeAuthDto } from '../dto/code-auth.dto';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy, 
  ) {}

  async findAll() {
    const users = await this.userRepository.find({
      select: [
        'id',
        'email',
        'firstName',
        'lastName',
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

  async handleActive(data: CodeAuthDto): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { id: data._id },
    });

    if (!user) {
      throw new BadGatewayException('The code is invalid or expired');
    }

    //check expire code
    const isBeforeCheck = dayjs().isBefore(user.codeExpired);
    if (isBeforeCheck) {
      await this.userRepository.update({ id: data._id }, { isActive: true });
      return { isBeforeCheck };
    } else {
      throw new BadGatewayException('The code is invalid or expired');
    }
  }

} 