import 'server-only';

import { CreatePaymentWebhookEventDTO } from '@domain/dtos';
import { PaymentProviderAbstract } from '@domain/providers';

export default class CreatePaymentWebhookEventUseCase {
  constructor(private readonly paymentProvider: PaymentProviderAbstract) {}

  public execute(dto: CreatePaymentWebhookEventDTO) {
    return this.paymentProvider.createEvent(dto);
  }
}
