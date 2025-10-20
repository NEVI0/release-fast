import CreatePaymentCheckoutForClientUseCase from '@domain/useCases/CreatePaymentCheckoutForClientUseCase';

import { FakePaymentRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakePaymentRepository();
  const useCase = new CreatePaymentCheckoutForClientUseCase(repository);

  return { repository, useCase };
};

describe('CreatePaymentCheckoutForClientUseCase', () => {
  it('should create checkout correctly', async () => {
    const { repository, useCase } = makeUseCase();

    await useCase.execute({ plan: 'pro' });

    expect(repository.createCheckout).toHaveBeenCalled();
  });

  it('should throw an error if "plan" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ plan: '' as any })).rejects.toThrow(
      'The selected plan is required'
    );
  });
});
