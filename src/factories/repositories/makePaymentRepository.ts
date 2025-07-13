import { PaymentRepositoryAbstract } from '@domain/repositories';

import StripePaymentRepository from '@infra/repositories/StripePaymentRepository';
import makeHttpProvider from '@factories/providers/makeHttpProvider';

let instance: PaymentRepositoryAbstract | null = null;

export default function makePaymentRepository() {
  if (!instance) {
    const httpProvider = makeHttpProvider();
    instance = new StripePaymentRepository(httpProvider);
  }

  return instance;
}
