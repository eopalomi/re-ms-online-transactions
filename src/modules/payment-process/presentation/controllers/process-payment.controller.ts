import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentUseCase } from '../../application/uses-cases/create-payment.use-case';

@Controller('/transaction')
export class PaymentProcessController {
  constructor(private readonly createPaymentUseCase: CreatePaymentUseCase) {}

  @Post('')
  async registrationRequest(@Body() data: any) {
    this.createPaymentUseCase.execute(data);
    return { responseCode: '00', message: '' };
  }
}
