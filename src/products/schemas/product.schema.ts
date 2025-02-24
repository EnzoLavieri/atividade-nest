import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  valor: number;

  @Prop({ required: true })
  quantidade: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
