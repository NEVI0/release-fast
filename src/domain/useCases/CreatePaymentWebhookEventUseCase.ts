import 'server-only';

import { CreatePaymentWebhookEventDTO } from '@domain/dtos';
import { PaymentProviderAbstract } from '@domain/providers';

export default class CreatePaymentWebhookEventUseCase {
  constructor(private readonly paymentProvider: PaymentProviderAbstract) {}

  public execute(dto: CreatePaymentWebhookEventDTO) {
    this.validateDto(dto);
    return this.paymentProvider.createEvent(dto);
  }

  private validateDto(dto: CreatePaymentWebhookEventDTO) {
    if (!dto.body) {
      throw new Error('The body is required');
    }

    if (!dto.signature) {
      throw new Error('The payment signature is required');
    }

    if (!dto.secret) {
      throw new Error('The payment secret is required');
    }
  }
}
