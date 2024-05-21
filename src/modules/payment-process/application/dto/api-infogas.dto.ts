export class ApiInfogasDto {
  codRes: string;
  placa: string;
  companyCode: number;
  tipo: string;
  created_at: CreatedAt;
  detalles: Detalles;
  _id: _Id;
}

class CreatedAt {
  '$date': number;
}

class Detalles {
  proximaRevaluacionAnual: Date;
  proximoVencimientoCilindro: Date;
  tieneCredito: boolean;
  vehiculoHabilitado: boolean;
  tieneCreditoHabilitado: boolean;
  placa: string;
}

class _Id {
  _id: string;
}
