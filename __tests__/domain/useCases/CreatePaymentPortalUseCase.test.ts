import CreatePaymentPortalUseCase from '@domain/useCases/CreatePaymentPortalUseCase';

import { FakeUser } from '@tests/fakers/entities';
import { FakePaymentProvider } from '@tests/fakers/providers';
import { FakeUserRepository } from '@tests/fakers/repositories';

import { auth } from '@configs/auth';

const makeUseCase = () => {
  const paymentProvider = new FakePaymentProvider();
  const userRepository = new FakeUserRepository();

  const useCase = new CreatePaymentPortalUseCase(
    paymentProvider,
    userRepository
  );

  return { paymentProvider, userRepository, useCase };
};

describe('CreatePaymentPortalUseCase', () => {
  it('should create the portal correctly', async () => {
    const { userRepository, useCase } = makeUseCase();

    userRepository.mockUser(new FakeUser({ id: '123' })); // ID "123" because jest.setup.ts has this value
    const { url } = await useCase.execute();

    expect(url).toBeDefined();
  });

  it('should throw an error if user is not authenticated', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute()).rejects.toThrow('Unauthorized');
  });

  it('should throw error if auth returns null', async () => {
    const { useCase } = makeUseCase();
    (auth as jest.Mock).mockResolvedValueOnce(null);

    await expect(useCase.execute()).rejects.toThrow('Unauthorized');
  });

  it('should throw an error if could not create the portal', async () => {
    const { paymentProvider, userRepository, useCase } = makeUseCase();

    jest.spyOn(paymentProvider, 'createPortal').mockResolvedValueOnce(null);
    userRepository.mockUser(new FakeUser({ id: '123' })); // ID "123" because jest.setup.ts has this value

    await expect(useCase.execute()).rejects.toThrow(
      'Could not create the portal...'
    );
  });
});
