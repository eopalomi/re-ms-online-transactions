import { RequestList } from './registration-fr-request.dto';

export class FrPgDto extends RequestList {
  applicationType: number;
  companyCode: number;
  lotFr: number;
  approvalDate: Date;
  scheduleStart: Date;
  scheduleEnd: Date;
}
