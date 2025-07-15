import { PlanType } from '@domain/entities';

export default interface CreatePaymentCheckoutUseCaseDTO {
  plan: PlanType;
  metadata?: any;
}
