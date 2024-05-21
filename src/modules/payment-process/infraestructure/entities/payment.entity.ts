import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'test', schema: 'frfacrec' })
export class PaymentRequestPgEntity {
  @PrimaryColumn({ name: 'id', type: 'varchar' })
  id: number;

  @Column({ name: 'date', type: 'varchar', nullable: true })
  date?: string;

  @Column({ name: 'hour', type: 'varchar', nullable: true })
  hour?: string;

  @Column({ name: 'amount', type: 'varchar', nullable: true })
  amount?: string;

  @Column({ name: 'currency', type: 'varchar', nullable: true })
  currency?: string;

  @Column({ name: 'creditCode', type: 'varchar', nullable: true })
  creditCode?: string;

  @Column({ name: 'referenceNumber', type: 'varchar', nullable: true })
  referenceNumber?: string;

  @Column({ name: 'document', type: 'varchar', nullable: true })
  document?: string;

  @Column({ name: 'carPlate', type: 'varchar', nullable: true })
  carPlate?: string;
}
