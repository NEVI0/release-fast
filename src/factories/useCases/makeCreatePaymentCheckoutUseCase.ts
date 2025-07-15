import CreatePaymentCheckoutUseCase from '@domain/useCases/CreatePaymentCheckoutUseCase';

import makePaymentProvider from '@factories/providers/makePaymentProvider';
import makeUserRepository from '@factories/repositories/makeUserRepository';

let instance: CreatePaymentCheckoutUseCase | null = null;

export default function makeCreatePaymentCheckoutUseCase() {
  if (!instance) {
    const paymentProvider = makePaymentProvider();
    const userRepository = makeUserRepository();

    instance = new CreatePaymentCheckoutUseCase(
      paymentProvider,
      userRepository
    );
  }

  return instance;
}
