import { Injectable } from '@nestjs/common';

@Injectable()
export class deletePaymentUseCase {
  constructor() {}

  public async execute(registrationRequestDto: any) {
    /*Logica de validaciones*/
    console.log('EXCUTNAOD');
    return;
  }
}
