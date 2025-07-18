import { PlanType } from '@domain/entities';

export default interface UpdateUserPlanByPaymentIdDTO {
  paymentId: string;
  plan: PlanType;
}
