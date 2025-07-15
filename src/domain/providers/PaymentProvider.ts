import { PaymentUserAbstract, PlanType } from '@domain/entities';

export interface CreateCheckoutParams {
  user: {
    id: string;
    paymentId: string;
  };
  url: {
    success: string;
    cancel: string;
  };
  plan: PlanType;
  metadata: any;
}

export interface CreatePortalParams {
  user: {
    paymentId: string;
  };
  return: {
    url: string;
  };
}

export default interface PaymentProviderAbstract {
  createCheckout(params: CreateCheckoutParams): Promise<{ id: string } | null>;
  createUser(user: PaymentUserAbstract): Promise<PaymentUserAbstract | null>;
  createPortal(params: CreatePortalParams): Promise<{ url: string } | null>;
}
