import { faker } from '@faker-js/faker/locale/en';

import { UpdateUserPlanByPaymentIdDTO } from '@domain/dtos';
import UpdateUserPlanByPaymentIdUseCase from '@domain/useCases/UpdateUserPlanByPaymentIdUseCase';

import { FakeUser } from '@tests/fakers/entities';
import { FakeUserRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeUserRepository();
  const useCase = new UpdateUserPlanByPaymentIdUseCase(repository);

  return { repository, useCase };
};

describe('UpdateUserPlanByPaymentIdUseCase', () => {
  const baseDto: UpdateUserPlanByPaymentIdDTO = {
    paymentId: faker.string.uuid(),
    plan: faker.helpers.arrayElement(['free', 'starter', 'pro', 'enterprise']),
  };

  it('should update user plan correctly', async () => {
    const { repository, useCase } = makeUseCase();

    const paymentId = faker.string.uuid();
    const plan = 'free';

    repository.mockUser(new FakeUser({ paymentId, plan }));

    const dto: UpdateUserPlanByPaymentIdDTO = { paymentId, plan: 'starter' };
    await useCase.execute(dto);

    expect(repository.updateByPaymentId).toHaveBeenCalled();
  });

  it('should throw an error if user is not authenticated', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute(baseDto)).rejects.toThrow('Unauthorized');
  });

  it.each([
    {
      field: 'paymentId',
      expectedError: 'The user payment ID is required',
      dto: { ...baseDto, paymentId: '' },
    },
    {
      field: 'plan',
      expectedError: 'The selected plan is required',
      dto: { ...baseDto, plan: '' },
    },
  ])(
    'should throw an error if "$field" is missing',
    async ({ dto, expectedError }) => {
      const { useCase } = makeUseCase();

      await expect(
        useCase.execute(dto as UpdateUserPlanByPaymentIdDTO)
      ).rejects.toThrow(expectedError);
    }
  );
});
