import CreatePaymentPortalForClientUseCase from '@domain/useCases/CreatePaymentPortalForClientUseCase';
import makePaymentRepository from '@factories/repositories/makePaymentRepository';

let instance: CreatePaymentPortalForClientUseCase | null = null;

export default function makeCreatePaymentPortalForClientUseCase() {
  if (!instance) {
    const paymentRepository = makePaymentRepository();
    instance = new CreatePaymentPortalForClientUseCase(paymentRepository);
  }

  return instance;
}
