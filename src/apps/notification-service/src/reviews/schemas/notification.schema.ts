import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationType = 'email' | 'in-app' | 'push';

@Schema({ timestamps: true })
export class Notification extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  type: NotificationType;

  @Prop({ required: true })
  content: any; // tùy biến theo loại

  @Prop({ default: 'pending' })
  status: 'pending' | 'sent' | 'failed';

  @Prop()
  sentAt?: Date;

  @Prop()
  error?: string;

  @Prop({ default: false })
  read: boolean;

  @Prop()
  metadata?: any; // Dùng để lưu thêm các info tuỳ biến
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
