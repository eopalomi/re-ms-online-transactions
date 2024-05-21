// rabbitmq.module.ts
import { DynamicModule, Module } from '@nestjs/common';
import { RabbitMQService, AMQPConnectionOptions } from './rabbitmq.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Module({})
export class RabbitMQModule {
  static register(connectionOptions: AMQPConnectionOptions[]): DynamicModule {
    const amqpProviders = connectionOptions.map((options) => ({
      provide: options.name,
      useFactory: async (eventEmitter: EventEmitter2) => {
        const amqpService = new RabbitMQService(eventEmitter);
        await amqpService.createConection(
          options.url,
          options.requestingEntity,
        );
        amqpService.prepareConsumers(options);
        return amqpService;
      },
      inject: [EventEmitter2],
    }));
    return {
      module: RabbitMQModule,
      providers: [...amqpProviders, RabbitMQService],
      exports: [...amqpProviders, RabbitMQService],
    };
  }
}
