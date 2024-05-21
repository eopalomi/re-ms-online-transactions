import { FrPgDto } from './fr-pg';

export class FrUpdatePgDto extends FrPgDto {
  requestCode: number;
  proccesStatus?: boolean;
  cofideDate?: Date;
  processDate?: Date;
  processDescription?: string;
  requestStatus?: number;
  infogasDate?: Date;
}
