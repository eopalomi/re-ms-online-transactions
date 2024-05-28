import { Inject, Injectable } from '@nestjs/common';
import { RabbitMQService } from '@src/libs/rabbit-mq/rabbitmq.service';

@Injectable()
export class CreatePaymentUseCase {
  constructor(
    @Inject('TRANSACTION_PUBLISHER')
    private readonly transactionPublisher: RabbitMQService,
  ) {}

  public async execute(registrationRequestDto: any) {
    await this.transactionPublisher.sendToQueue(
      'trasaction.event',
      'trx.cofide',
      registrationRequestDto,
    );
    return;
  }
}
