import { Injectable, Logger } from '@nestjs/common';
import { connect, Channel, Connection } from 'amqplib';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EventProps } from './interfaces/event.interface';
import { v4 as uuidv4 } from 'uuid';

export interface AMQPConnectionOptions {
  name: string;
  url: string;
  consumerQueues?: string[];
  requestingEntity: string;
}

@Injectable()
export class RabbitMQService {
  private readonly logger = new Logger('RabbitMQService');
  private connection: Connection;
  private channel: Channel;
  private amqpUrl: string;
  private notifyTimeoutList: Map<string, any> = new Map();
  private connectionOptions: AMQPConnectionOptions[] = [];
  private requestingEntity: string;

  constructor(private readonly event: EventEmitter2) {}

  async onModuleInit() {
    if (this.connectionOptions.length > 0) {
      this.connectionOptions.map((options) => {
        if (options.consumerQueues && options.consumerQueues.length > 0)
          options.consumerQueues.map((queue) => this.consumeMessage(queue));
      });
    }
  }

  async onModuleDestroy() {
    await this.channel.close();
    await this.connection.close();
  }

  async createConection(_amqpUrl: string, _requestingEntity: string) {
    this.amqpUrl = _amqpUrl;
    this.connection = await connect(this.amqpUrl);
    this.channel = await this.connection.createChannel();
    this.requestingEntity = _requestingEntity;
  }

  prepareConsumers(amqpConnectionOptions: AMQPConnectionOptions) {
    this.connectionOptions.push(amqpConnectionOptions);
  }

  async sendEvent(eventName: string, message: any): Promise<EventProps> {
    return await this.sendToQueue(eventName, eventName, message);
  }

  notifyTimeout(
    waitTime: number,
    eventNotify: string,
    event: EventProps,
  ): void {
    const setTimeoutId = setTimeout(() => {
      if (this.notifyTimeoutList.has(event.correlationId)) {
        event.message = `Timeout: No response received within ${waitTime / 1000} seconds`;
        this.event.emit(eventNotify, { ...event, eventName: eventNotify });

        this.notifyTimeoutList.delete(event.correlationId);
      }
    }, waitTime);

    this.notifyTimeoutList.set(event.correlationId, {
      eventNotify,
      event,
      setTimeoutId,
    });
  }

  async sendToQueue(
    eventName: string,
    queue: string,
    message: any,
  ): Promise<EventProps> {
    await this.channel.assertQueue(queue, { durable: true });
    const request: EventProps = {
      eventName,
      correlationId: uuidv4(),
      correlationIdPrior: '',
      creationDate: this.formatDate(new Date()),
      requestingEntity: this.requestingEntity,
      data: message,
    };
    this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(request)), {
      persistent: true,
    });
    return request;
  }

  async consumeMessage(queue: string) {
    if (!this.channel) throw new Error('Channel is not initialized.');

    await this.channel.assertQueue(queue, { durable: true });
    this.channel.consume(queue, async (msg) => {
      if (msg !== null) {
        try {
          const content: EventProps = JSON.parse(msg.content.toString());
          this.event.emit(content.eventName, content);
          this.clearNotificationTimeout(content.correlationIdPrior);
        } catch (error) {
          this.logger.error(error.message);
        } finally {
          this.channel.ack(msg);
        }
      }
    });
  }

  clearNotificationTimeout(correlationId: string) {
    if (this.notifyTimeoutList.has(correlationId)) {
      clearTimeout(this.notifyTimeoutList.get(correlationId));
      this.notifyTimeoutList.delete(correlationId);
    }
  }

  formatDate(date: Date): string {
    return date.toLocaleString('es-PE', { timeZone: 'America/Lima' });
  }
}
