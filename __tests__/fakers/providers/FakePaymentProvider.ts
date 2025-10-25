import { faker } from '@faker-js/faker/locale/en';

import { PaymentProviderAbstract } from '@domain/providers';

export default class FakePaymentProvider implements PaymentProviderAbstract {
  public createCheckout: PaymentProviderAbstract['createCheckout'] = jest.fn(
    async (_) => {
      return { id: faker.string.uuid() };
    }
  );

  public createUser: PaymentProviderAbstract['createUser'] = jest.fn(
    async (user) => {
      return user;
    }
  );

  public createPortal: PaymentProviderAbstract['createPortal'] = jest.fn(
    async (_) => {
      return { url: faker.internet.url() };
    }
  );

  public createEvent: PaymentProviderAbstract['createEvent'] = jest.fn((_) => {
    return null;
  });
}
