import { PlanType } from '@domain/entities';
import { HttpProviderAbstract } from '@domain/providers';
import { PaymentRepositoryAbstract } from '@domain/repositories';

export default class StripePaymentRepository
  implements PaymentRepositoryAbstract
{
  constructor(private readonly httpProvider: HttpProviderAbstract) {}

  public async createCheckout(plan: PlanType, metadata?: any) {
    try {
      const { sessionId } = await this.httpProvider.post<{ sessionId: string }>(
        '/api/stripe/create-checkout',
        {
          plan,
          metadata,
        }
      );

      return { sessionId };
    } catch (error) {
      return { sessionId: '' };
    }
  }

  public async createPortal() {
    try {
      const response = await this.httpProvider.post<{ url: string }>(
        '/api/stripe/create-portal',
        {}
      );

      return response;
    } catch (error) {
      return { url: '' };
    }
  }
}
