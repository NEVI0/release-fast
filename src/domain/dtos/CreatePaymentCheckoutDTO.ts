import { PlanType } from '@domain/entities';

export default interface CreatePaymentCheckoutDTO {
  plan: PlanType;
  metadata?: any;
}
