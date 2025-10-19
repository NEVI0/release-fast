import { faker } from '@faker-js/faker';

import DeleteUserByIdUseCase from '@domain/useCases/DeleteUserByIdUseCase';

import { FakeUser } from '@tests/fakers/entities';
import { FakeUserRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeUserRepository();
  const useCase = new DeleteUserByIdUseCase(repository);

  return { repository, useCase };
};

describe('DeleteUserByIdUseCase', () => {
  it('should delete user correctly', async () => {
    const { repository, useCase } = makeUseCase();

    const id = faker.string.uuid();

    repository.mockUser(new FakeUser({ id }));
    repository.mockUser(new FakeUser({}));

    await useCase.execute({ id });
    const user = await repository.findById(id);

    expect(user).toBeNull();
  });

  it('should throw an error if "id" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ id: '' })).rejects.toThrow(
      'The user ID is required'
    );
  });
});
