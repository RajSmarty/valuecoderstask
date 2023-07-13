import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Prescription extends Document {
  @Prop()
  nhi: string;

  // Other prescription properties

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const PrescriptionSchema = SchemaFactory.createForClass(Prescription);
