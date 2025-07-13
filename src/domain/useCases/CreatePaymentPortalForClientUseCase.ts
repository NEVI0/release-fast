import { PaymentRepositoryAbstract } from '@domain/repositories';

export default class CreatePaymentPortalForClientUseCase {
  constructor(private readonly paymentRepository: PaymentRepositoryAbstract) {}

  public async execute() {
    return this.paymentRepository.createPortal();
  }
}
