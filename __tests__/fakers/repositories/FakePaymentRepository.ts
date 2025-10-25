import { faker } from '@faker-js/faker/locale/en';

import { PaymentRepositoryAbstract } from '@domain/repositories';

export default class FakePaymentRepository
  implements PaymentRepositoryAbstract
{
  public createCheckout: PaymentRepositoryAbstract['createCheckout'] = jest.fn(
    async () => {
      return Promise.resolve({ sessionId: faker.string.uuid() });
    }
  );

  public createPortal: PaymentRepositoryAbstract['createPortal'] = jest.fn(
    async () => {
      return Promise.resolve({ url: faker.internet.url() });
    }
  );
}
