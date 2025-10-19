import { faker } from '@faker-js/faker';

import { UpdateUserPlanDTO } from '@domain/dtos';
import UpdateUserPlanUseCase from '@domain/useCases/UpdateUserPlanUseCase';

import { FakeUser } from '@tests/fakers/entities';
import { FakeUserRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeUserRepository();
  const useCase = new UpdateUserPlanUseCase(repository);

  return { repository, useCase };
};

describe('UpdateUserPlanUseCase', () => {
  const baseDto: UpdateUserPlanDTO = {
    userId: faker.string.uuid(),
    plan: faker.helpers.arrayElement(['free', 'starter', 'pro', 'enterprise']),
  };

  it('should update user plan correctly', async () => {
    const { repository, useCase } = makeUseCase();

    const userId = faker.string.uuid();
    const plan = 'free';

    repository.mockUser(new FakeUser({ id: userId, plan }));

    const dto: UpdateUserPlanDTO = { userId, plan: 'starter' };
    await useCase.execute(dto);

    expect(repository.update).toHaveBeenCalled();
  });

  it('should throw an error if user is not authenticated', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute(baseDto)).rejects.toThrow('Unauthorized');
  });

  it.each([
    {
      field: 'userId',
      expectedError: 'The user ID is required',
      dto: { ...baseDto, userId: '' },
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

      await expect(useCase.execute(dto as UpdateUserPlanDTO)).rejects.toThrow(
        expectedError
      );
    }
  );
});
