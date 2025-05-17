import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from './schemas/notification.schema';
import { ClientProxy, RpcException } from '@nestjs/microservices';
@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name) private notificationModel: Model<Notification>,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('VOCAB_SERVICE') private readonly vocabClient: ClientProxy,
  ) {}



  

}
