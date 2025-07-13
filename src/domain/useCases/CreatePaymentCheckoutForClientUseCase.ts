import { CreatePaymentCheckoutForClientDTO } from '@domain/dtos';
import { PaymentRepositoryAbstract } from '@domain/repositories';

export default class CreatePaymentCheckoutForClientUseCase {
  constructor(private readonly paymentRepository: PaymentRepositoryAbstract) {}

  public async execute(dto: CreatePaymentCheckoutForClientDTO) {
    return this.paymentRepository.createCheckout(dto.plan, dto.metadata);
  }
}
