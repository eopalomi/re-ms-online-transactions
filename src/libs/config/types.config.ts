export interface EnvConfigurationType {
  environment: string;
  pgCore: PgCoreType;
}

export interface PgCoreType {
  hostPgCore: string;
  portPgCore: number;
  namePgCore: string;
  userPgCore: string;
  passPgCore: string;
}
