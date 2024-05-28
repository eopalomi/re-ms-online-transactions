import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Recaudo } from './payment.entity';

@Schema({ collection: 'recaudo_payment_log' })
export class RecaudoPaymentLogEntity extends Recaudo {}

export const RecaudoPaymentLogSchema = SchemaFactory.createForClass(
  RecaudoPaymentLogEntity,
);
