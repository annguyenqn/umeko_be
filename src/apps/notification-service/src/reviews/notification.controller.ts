// review.controller.ts
import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { ApiTags, } from '@nestjs/swagger';

@ApiTags('Notification')
@Controller('Notification')
// @UseInterceptors(NotificationInterceptor)
export class NotificationController {
  constructor(private readonly  notificatioService: NotificationService) {}

}
