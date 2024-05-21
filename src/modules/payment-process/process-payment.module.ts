import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentRequestPgEntity } from '@src/modules/payment-process/infraestructure/entities/payment.entity';
import { PaymentProcessController } from '@src/modules/payment-process/presentation/controllers/process-payment.controller';
import { CreatePaymentUseCase } from '@src/modules/payment-process/application/uses-cases/create-payment.use-case';
import { PaymentRepository } from '@src/modules/payment-process/domain/repository/payment.repository';
import { PaymentAdapter } from '@src/modules/payment-process/infraestructure/adapters/payment.adapter';
import { RabbitMQModule } from '@src/libs/rabbit-mq/rabbitmq.module';

@Module({
  controllers: [PaymentProcessController],
  providers: [
    /* Ports and Adapters */
    {
      provide: PaymentRepository,
      useClass: PaymentAdapter,
    },
    /* Use Cases */
    CreatePaymentUseCase,
  ],
  imports: [
    TypeOrmModule.forFeature([PaymentRequestPgEntity]),
    RabbitMQModule.register([
      {
        name: 'TRANSACTION_PUBLISHER',
        url: 'amqp://guest:guest@192.168.23.22:5673/transactions',
        requestingEntity: 'transaction',
      },
    ]),
  ],
})
export class PaymentProcessModule {}
