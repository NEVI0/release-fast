import { CreatePaymentCheckoutForClientDTO } from '@domain/dtos';
import { PaymentRepositoryAbstract } from '@domain/repositories';

export default class CreatePaymentCheckoutForClientUseCase {
  constructor(private readonly paymentRepository: PaymentRepositoryAbstract) {}

  public async execute(dto: CreatePaymentCheckoutForClientDTO) {
    this.validateDto(dto);
    return this.paymentRepository.createCheckout(dto.plan, dto.metadata);
  }

  private validateDto(dto: CreatePaymentCheckoutForClientDTO) {
    if (!dto.plan) {
      throw new Error('The selected plan is required');
    }
  }
}
