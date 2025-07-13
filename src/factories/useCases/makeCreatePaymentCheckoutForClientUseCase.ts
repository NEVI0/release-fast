import CreatePaymentCheckoutForClientUseCase from '@domain/useCases/CreatePaymentCheckoutForClientUseCase';
import makePaymentRepository from '@factories/repositories/makePaymentRepository';

let instance: CreatePaymentCheckoutForClientUseCase | null = null;

export default function makeCreatePaymentCheckoutForClientUseCase() {
  if (!instance) {
    const paymentRepository = makePaymentRepository();
    instance = new CreatePaymentCheckoutForClientUseCase(paymentRepository);
  }

  return instance;
}
