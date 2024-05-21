export class RegistrationFrRequestDto {
  applicationType: string;
  companyCode: number;
  requestList: RequestList[];
}

export class RequestList {
  requestingUser: string;
  applicationDescription: string;
  plate: string;
  creditType: number;
  customerName: string;
  documentType: number;
  numberDocument: string;
  vehicleType: number;
  workshopCode?: number;
  dealerCode?: number;
  customerCode: string;
  budgetAmount: number;
  initialFee: number;
  percentFR: number;
  approvalDate: Date;
  credit: string;
  fiseCredit: boolean;
  scheduleStart: Date;
  scheduleEnd: Date;
  effectiveMonthlyRate: number;
  schedule: Schedule[];
}

export class Schedule {
  capitalAmount: number;
  interestAmount: number;
  endingBalance: number;
  numberQuota: number;
  feeAmount: number;
}
