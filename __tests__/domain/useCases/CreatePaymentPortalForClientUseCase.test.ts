import CreatePaymentPortalForClientUseCase from '@domain/useCases/CreatePaymentPortalForClientUseCase';

import { FakePaymentRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakePaymentRepository();
  const useCase = new CreatePaymentPortalForClientUseCase(repository);

  return { repository, useCase };
};

describe('CreatePaymentPortalForClientUseCase', () => {
  it('should create the portal correctly', async () => {
    const { repository, useCase } = makeUseCase();
    await useCase.execute();

    expect(repository.createPortal).toHaveBeenCalled();
  });
});
