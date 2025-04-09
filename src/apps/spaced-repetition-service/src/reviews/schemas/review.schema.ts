// schemas/review.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Review extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  vocabId: string;

  @Prop({ default: 0 })
  repetitionCount: number;

  @Prop({ default: 2.5 })
  efFactor: number;

  @Prop({ default: 1 })
  interval: number;

  @Prop({ default: () => new Date() })
  lastReview: Date;

  @Prop()
  nextReview: Date;

  @Prop()
  lastResult: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
