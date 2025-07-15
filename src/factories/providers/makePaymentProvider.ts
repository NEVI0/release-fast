import 'server-only';

import { PaymentProviderAbstract } from '@domain/providers';
import StripePaymentProvider from '@infra/providers/StripePaymentProvider';

let instance: PaymentProviderAbstract | null = null;

export default function makePaymentProvider() {
  if (!instance) {
    instance = new StripePaymentProvider();
  }

  return instance;
}
