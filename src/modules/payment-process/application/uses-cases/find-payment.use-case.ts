import { Inject, Injectable } from '@nestjs/common';
import { RabbitMQService } from '@src/libs/rabbit-mq/rabbitmq.service';

@Injectable()
export class findPaymentUseCase {
  constructor(
    @Inject("TRANSACTION_PUBLISHER")
    private readonly transactionPublisher: RabbitMQService
  ) {
    
  }

  public async execute(registrationRequestDto: any) {
    /*Logica de validaciones*/
    
    return;
  }
}
