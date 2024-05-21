export interface PgInfogasInterface {
  companyCode: number;
  plate: string;
  nextAnnualRevaluation?: Date;
  nextExpirationCylinder?: Date;
  hasCredit?: boolean;
  hasVehicleEnabled?: boolean;
  fuelType?: string;
}
