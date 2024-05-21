export interface PgCofideInterface {
  companyCode: number;
  plate: string;
  creditType?: string;
  creditHolder?: string;
  documentType?: string;
  documentNumber?: string;
  vehicleType?: string;
  workshopName?: string;
  concessionaire?: string;
  customerCode?: string;
  creditAmount?: number;
  budgetAmount?: number;
  initialFee?: number;
  collectionPercentage?: number;
  approvalDate?: Date;
  promissoryNote?: string;
  creditStatus?: string;
  isCollectionEnabled?: boolean;
  collectionStartDate?: Date;
  isFiseCredit?: boolean;
  calendarEndDate?: Date;
  startDate?: Date;
  monthlyEffectiveRate?: number;
}
