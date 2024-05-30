import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RabbitMQService } from '@src/libs/rabbit-mq/rabbitmq.service';
import { Model } from 'mongoose';
import { PaymentDto } from '../dto/input-recaudo.dto';
import { RecaudoPaymentLogEntity } from '../../infraestructure/entities/recaudo-payment-log.entity';
import { RecaudoPaymentQueueEntity } from '../../infraestructure/entities/recaudo-payment-queue.entity';
@Injectable()
export class CreatePaymentUseCase {
  constructor(
    @Inject('TRANSACTION_PUBLISHER')
    private readonly transactionPublisher: RabbitMQService,
    @InjectModel(RecaudoPaymentLogEntity.name)
    private readonly recaudoPaymentLog: Model<RecaudoPaymentLogEntity>,
    @InjectModel(RecaudoPaymentQueueEntity.name)
    private readonly recaudoPaymentQueue: Model<RecaudoPaymentQueueEntity>,
  ) {}

  public async execute(registrationRequestDto: PaymentDto) {
    try {
      await this.transactionPublisher.sendToQueue(
        'trasaction.event',
        'trx.cofide',
        registrationRequestDto,
      );
      this.recaudoPaymentLog.create(registrationRequestDto);
    } catch (error) {
      this.recaudoPaymentQueue.create(registrationRequestDto);
    }
    return;
  }
}
