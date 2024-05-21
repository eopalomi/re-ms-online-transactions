export class FRRequestDto {
  requestCode?: number;

  applicationDate?: Date;

  companyCode: number;

  productName: string;

  channel: string;

  applicationType: number;

  lotFr: number;

  requestingUser: string;

  applicationDescription: string;

  requestStatus?: number;

  plate: string;

  creditType: number;

  customerName: string;

  documentType: number;

  numberDocument: string;

  vehicleType: number;

  workshopCode: string;

  dealerCode: number;

  customerCode: string;

  budgetAmount: number;

  creditAmount: number;

  initialFee: number;

  percentFR: number;

  approvalDate: Date;

  credit: string;

  fiseCredit: boolean;

  scheduleStart: Date;

  scheduleEnd: Date;

  effectiveMonthlyRate: number;

  schedule: any;

  processDate?: Date;

  processStatus?: boolean;

  processDescription?: string;
}
