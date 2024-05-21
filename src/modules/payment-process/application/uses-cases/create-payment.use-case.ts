import { Inject, Injectable } from '@nestjs/common';
import { PaymentRepository } from '../../domain/repository/payment.repository';
import { RabbitMQService } from '@src/libs/rabbit-mq/rabbitmq.service';

@Injectable()
export class CreatePaymentUseCase {
  constructor( 
    @Inject("TRANSACTION_PUBLISHER")
    private readonly transactionPublisher: RabbitMQService,
  ) {}

  public async execute(registrationRequestDto: any) {
    await this.transactionPublisher.sendToQueue(
      'trx.cofide',
      'trx.cofide',
      registrationRequestDto,
    );
    return;
  }
}
