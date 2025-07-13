import { PlanType } from '@domain/entities';

export default interface CreatePaymentCheckoutForClientDTO {
  plan: PlanType;
  metadata?: any;
}
