import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RabbitMQService } from '@src/libs/rabbit-mq/rabbitmq.service';
import { Model } from 'mongoose';
import { RecaudoPaymentQueueEntity } from '../../infraestructure/entities/recaudo-payment-queue.entity';
import { Cron, CronExpression } from '@nestjs/schedule';
@Injectable()
export class CronService {
  constructor(
    @Inject('TRANSACTION_PUBLISHER')
    private readonly transactionPublisher: RabbitMQService,
    @InjectModel(RecaudoPaymentQueueEntity.name)
    private readonly recaudoPaymentQueue: Model<RecaudoPaymentQueueEntity>,
  ) {}

  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleCron() {
    const data = await this.recaudoPaymentQueue.find().exec();
    console.log('data', data);
    for (const item of data) {
      try {
        await this.transactionPublisher.sendToQueue(
          'trasaction.event',
          'trx.cofide',
          item,
        );
        await this.recaudoPaymentQueue.findByIdAndDelete(item._id).exec();
      } catch (error) {
        this.recaudoPaymentQueue.create(item);
      }
    }
  }
}
