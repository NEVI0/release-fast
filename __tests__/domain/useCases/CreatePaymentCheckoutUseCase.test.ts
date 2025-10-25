import CreatePaymentCheckoutUseCase from '@domain/useCases/CreatePaymentCheckoutUseCase';

import { FakeUser } from '@tests/fakers/entities';
import { FakePaymentProvider } from '@tests/fakers/providers';
import { FakeUserRepository } from '@tests/fakers/repositories';

import { auth } from '@configs/auth';

const makeUseCase = () => {
  const paymentProvider = new FakePaymentProvider();
  const userRepository = new FakeUserRepository();

  const useCase = new CreatePaymentCheckoutUseCase(
    paymentProvider,
    userRepository
  );

  return { paymentProvider, userRepository, useCase };
};

describe('CreatePaymentCheckoutUseCase', () => {
  it('should create the checkout correctly', async () => {
    const { paymentProvider, userRepository, useCase } = makeUseCase();

    userRepository.mockUser(new FakeUser({ id: '123', paymentId: '' })); // ID "123" because jest.setup.ts has this value
    const { id } = await useCase.execute({ plan: 'pro' });

    expect(id).toBeDefined();

    expect(paymentProvider.createCheckout).toHaveBeenCalled();
    expect(paymentProvider.createUser).toHaveBeenCalled();
  });

  it('should throw an error if "plan" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ plan: '' as any })).rejects.toThrow(
      'The selected plan is required'
    );
  });

  it('should throw an error if user is not authenticated', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ plan: 'enterprise' })).rejects.toThrow(
      'Unauthorized'
    );
  });

  it('should throw error if auth returns null', async () => {
    const { useCase } = makeUseCase();
    (auth as jest.Mock).mockResolvedValueOnce(null);

    await expect(useCase.execute({ plan: 'pro' })).rejects.toThrow(
      'Unauthorized'
    );
  });

  it('should throw an error if user has no email', async () => {
    const { userRepository, useCase } = makeUseCase();

    userRepository.mockUser(new FakeUser({ id: '123', email: '' })); // ID "123" because jest.setup.ts has this value

    await expect(useCase.execute({ plan: 'enterprise' })).rejects.toThrow(
      'You must provide your e-mail first'
    );
  });

  it('should throw an error if could not create the checkout', async () => {
    const { paymentProvider, userRepository, useCase } = makeUseCase();

    jest.spyOn(paymentProvider, 'createCheckout').mockResolvedValueOnce(null);
    userRepository.mockUser(new FakeUser({ id: '123' })); // ID "123" because jest.setup.ts has this value

    await expect(useCase.execute({ plan: 'enterprise' })).rejects.toThrow(
      'Could not create the checkout...'
    );
  });

  it('should throw an error if could not create the payment user', async () => {
    const { paymentProvider, userRepository, useCase } = makeUseCase();

    jest.spyOn(paymentProvider, 'createUser').mockResolvedValueOnce(null);
    userRepository.mockUser(new FakeUser({ id: '123', paymentId: '' })); // ID "123" because jest.setup.ts has this value

    await expect(useCase.execute({ plan: 'enterprise' })).rejects.toThrow(
      'Could not create the user for payments...'
    );
  });
});
