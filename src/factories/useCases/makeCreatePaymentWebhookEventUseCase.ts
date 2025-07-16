import 'server-only';

import CreatePaymentWebhookEventUseCase from '@domain/useCases/CreatePaymentWebhookEventUseCase';
import makePaymentProvider from '@factories/providers/makePaymentProvider';

let instance: CreatePaymentWebhookEventUseCase | null = null;

export default function makeCreatePaymentWebhookEventUseCase() {
  if (!instance) {
    const paymentProvider = makePaymentProvider();
    instance = new CreatePaymentWebhookEventUseCase(paymentProvider);
  }

  return instance;
}
