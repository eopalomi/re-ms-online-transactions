import { IsNotEmpty, IsString } from 'class-validator';

export class PaymentDto {
  @IsNotEmpty({ message: 'El campo codigoPlaca no puede estar vacío o null' })
  @IsString({ message: 'El campo codigoPlaca debe ser string' })
  codigoPlaca: string;

  @IsNotEmpty({ message: 'El campo codigoCredito no puede estar vacío o null' })
  @IsString({ message: 'El campo codigoCredito debe ser string' })
  codigoCredito: string;

  @IsNotEmpty({ message: 'El campo numeroTicket no puede estar vacío o null' })
  @IsString({ message: 'El campo numeroTicket debe ser string' })
  numeroTicket: string;

  @IsNotEmpty({ message: 'El campo fechaRecaudo no puede estar vacío o null' })
  @IsString({ message: 'El campo fechaRecaudo debe ser string' })
  fechaRecaudo: string;

  @IsNotEmpty({ message: 'El campo horaRecaudo no puede estar vacío o null' })
  @IsString({ message: 'El campo horaRecaudo debe ser string' })
  horaRecaudo: string;

  @IsNotEmpty({ message: 'El campo cantidadVenta no puede estar vacío o null' })
  @IsString({ message: 'El campo cantidadVenta debe ser string' })
  cantidadVenta: string;

  @IsNotEmpty({
    message: 'El campo precioUnitario no puede estar vacío o null',
  })
  @IsString({ message: 'El campo precioUnitario debe ser string' })
  precioUnitario: string;

  @IsNotEmpty({ message: 'El campo montoRecaudo no puede estar vacío o null' })
  @IsString({ message: 'El campo montoRecaudo debe ser string' })
  montoRecaudo: string;

  @IsNotEmpty({ message: 'El campo montoBruto no puede estar vacío o null' })
  @IsString({ message: 'El campo montoBruto debe ser string' })
  montoBruto: string;

  @IsNotEmpty({ message: 'El campo descEstacion no puede estar vacío o null' })
  @IsString({ message: 'El campo codigoPlaca debe ser string' })
  descEstacion: string;

  @IsNotEmpty({ message: 'El campo codigoEmpresa no puede estar vacío o null' })
  @IsString({ message: 'El campo codigoEmpresa debe ser string' })
  codigoEmpresa: string;

  @IsNotEmpty({
    message: 'El campo codigoTransaccion no puede estar vacío o null',
  })
  @IsString({ message: 'El campo codigoTransaccion debe ser string' })
  codigoTransaccion: string;
}
