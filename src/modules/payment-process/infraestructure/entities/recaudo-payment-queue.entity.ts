import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Recaudo } from './payment.entity';

@Schema({ collection: 'recaudo_payment_queue_dead' })
export class RecaudoPaymentQueueEntity extends Recaudo {}

export const RecaudoPaymentQueueSchema = SchemaFactory.createForClass(
  RecaudoPaymentQueueEntity,
);
