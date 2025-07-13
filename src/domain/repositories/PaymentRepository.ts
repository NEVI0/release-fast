import { PlanType } from '@domain/entities';

export default interface PaymentRepositoryAbstract {
  createCheckout(
    plan: PlanType,
    metadata?: any
  ): Promise<{ sessionId: string }>;

  createPortal(): Promise<{ url: string }>;
}
