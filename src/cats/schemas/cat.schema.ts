import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cat extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  breed: string;

  @Prop()
  color: string;

  @Prop()
  weight: number;

  @Prop({ default: false })
  isVaccinated: boolean;

  @Prop({ type: Object })
  owner?: {
    name: string;
    contact: string;
  };
}

export const CatSchema = SchemaFactory.createForClass(Cat);
