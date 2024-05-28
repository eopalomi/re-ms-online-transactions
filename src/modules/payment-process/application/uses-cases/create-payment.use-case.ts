import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RabbitMQService } from '@src/libs/rabbit-mq/rabbitmq.service';
import { Recaudo } from '@src/modules/payment-process/infraestructure/entities/payment.entity';
import { Model } from 'mongoose';
import { PaymentDto } from '../dto/input-recaudo.dto';
@Injectable()
export class CreatePaymentUseCase {
  constructor(
    @Inject('TRANSACTION_PUBLISHER')
    private readonly transactionPublisher: RabbitMQService,
    @InjectModel(Recaudo.name)
    @Inject('recaudo_payment_log')
    private readonly recaudo: Model<Recaudo>,
    // @InjectModel(Recaudo.name)
    // @Inject('recaudo_payment_queue_dead')
    // private readonly recaudoQueueDead: Model<Recaudo>,
  ) {}

  public async execute(registrationRequestDto: PaymentDto) {
    await this.recaudo.create(registrationRequestDto);
    try {
      await this.transactionPublisher.sendToQueue(
        'trasaction.event',
        'trx.cofide',
        registrationRequestDto,
      );
    } catch (error) {
      console.log('inserción cola defectuosa');
      // await this.recaudoQueueDead.create(registrationRequestDto);
    }

    return;
  }
}
