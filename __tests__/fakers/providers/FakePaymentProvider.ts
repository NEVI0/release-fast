import { faker } from '@faker-js/faker/locale/en';

import { PaymentProviderAbstract } from '@domain/providers';

export default class FakePaymentProvider implements PaymentProviderAbstract {
  public createCheckout: PaymentProviderAbstract['createCheckout'] = async (
    _
  ) => {
    return { id: faker.string.uuid() };
  };

  public createUser: PaymentProviderAbstract['createUser'] = async (user) => {
    return user;
  };

  public createPortal: PaymentProviderAbstract['createPortal'] = async (_) => {
    return { url: faker.internet.url() };
  };

  public createEvent: PaymentProviderAbstract['createEvent'] = (_) => {
    return null;
  };
}
