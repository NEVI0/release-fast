import { faker } from '@faker-js/faker';

import FetchUserByIdUseCase from '@domain/useCases/FetchUserByIdUseCase';

import { FakeUser } from '@tests/fakers/entities';
import { FakeUserRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeUserRepository();
  const useCase = new FetchUserByIdUseCase(repository);

  return { repository, useCase };
};

describe('FetchUserByIdUseCase', () => {
  it('should return user by ID correctly', async () => {
    const { repository, useCase } = makeUseCase();

    const id = faker.string.uuid();
    repository.mockUser(new FakeUser({ id }));

    const user = await useCase.execute({ id });

    expect(user?.id).toBe(id);
  });

  it('should return "null" to user not found', async () => {
    const { useCase } = makeUseCase();
    const user = await useCase.execute({ id: faker.string.uuid() });

    expect(user).toBeNull();
  });

  it('should throw an error if "id" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ id: '' })).rejects.toThrow(
      'The user ID is required'
    );
  });
});
