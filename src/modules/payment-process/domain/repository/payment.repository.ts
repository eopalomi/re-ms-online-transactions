import { PgCofideInterface } from '../../infraestructure/interfaces/pg-cofide.interface';

export abstract class PaymentRepository {
  abstract save(params: any): Promise<any>;
  abstract remove(query: any): Promise<any>;
  abstract findAll(): Promise<any>;
}
