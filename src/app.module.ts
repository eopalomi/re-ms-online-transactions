import { Module } from '@nestjs/common';
import { PaymentProcessModule } from '@src/modules/payment-process/process-payment.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from '@src/libs/config/env.config';
import { configSchema } from '@src/libs/config/config.schema';
import { DatabaseModule } from '@src/libs/database/database.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: configSchema,
      isGlobal: true,
    }),
    DatabaseModule,
    PaymentProcessModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
