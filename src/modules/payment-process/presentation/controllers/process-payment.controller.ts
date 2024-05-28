import {
  Body,
  Controller,
  Post,
  BadRequestException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePaymentUseCase } from '../../application/uses-cases/create-payment.use-case';
import { PaymentDto } from '../../application/dto/input-recaudo.dto';

@Controller('/transaction')
export class PaymentProcessController {
  constructor(private readonly createPaymentUseCase: CreatePaymentUseCase) {}

  @Post('')
  @UsePipes(new ValidationPipe())
  async registrationRequest(@Body() data: PaymentDto) {
    try {
      await this.createPaymentUseCase.execute(data);
      return { responseCode: '00', message: 'Payment created successfully' };
    } catch (error) {
      throw new BadRequestException('Invalid data provided');
    }
  }
}
