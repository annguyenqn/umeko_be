import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({ timestamps: true })
export class Notification extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  type: NotificationType;

  @Prop({ type: Object, required: true })
  content: any;

  @Prop({ default: 'pending' })
  status: NotificationStatus;

  @Prop()
  sentAt?: Date;

  @Prop()
  error?: string;

  @Prop({ default: false })
  read: boolean;

  @Prop({ type: Object })
  metadata?: any; 
}

export enum NotificationStatus {
  PENDING = 'pending',
  SENT = 'sent',
  FAILED = 'failed',
}

export enum NotificationType {
  EMAIL = 'email',
  IN_APP = 'in-app',
  PUSH = 'push',
}
export const NotificationSchema = SchemaFactory.createForClass(Notification);
