import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentRequestPgEntity } from '../entities/payment.entity';
import { PaymentRepository } from '../../domain/repository/payment.repository';

@Injectable()
export class PaymentAdapter implements PaymentRepository {
  constructor(
    @InjectRepository(PaymentRequestPgEntity)
    private readonly paymentRequestPgEntity: Repository<PaymentRequestPgEntity>,
  ) {}

  async save(params: any) {
    return this.paymentRequestPgEntity.save(params);
  }

  async findAll() {
    return this.paymentRequestPgEntity.find({});
  }

  async remove(where: any) {
    try {
      return this.paymentRequestPgEntity.remove(where);
    } catch (error) {
      return 'No existe data a eliminar';
    }
  }
}
