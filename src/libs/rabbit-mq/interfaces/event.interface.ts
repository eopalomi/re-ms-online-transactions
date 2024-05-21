export interface EventProps {
  eventName: string;
  correlationId: string;
  correlationIdPrior: string;
  creationDate: string;
  requestingEntity: string;
  data: any;
  message?: string;
}
