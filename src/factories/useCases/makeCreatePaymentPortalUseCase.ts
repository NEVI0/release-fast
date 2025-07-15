import CreatePaymentPortalUseCase from '@domain/useCases/CreatePaymentPortalUseCase';

import makePaymentProvider from '@factories/providers/makePaymentProvider';
import makeUserRepository from '@factories/repositories/makeUserRepository';

let instance: CreatePaymentPortalUseCase | null = null;

export default function makeCreatePaymentPortalUseCase() {
  if (!instance) {
    const paymentProvider = makePaymentProvider();
    const userRepository = makeUserRepository();

    instance = new CreatePaymentPortalUseCase(paymentProvider, userRepository);
  }

  return instance;
}
