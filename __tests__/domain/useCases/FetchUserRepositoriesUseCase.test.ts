import { faker } from '@faker-js/faker/locale/en';

import FetchUserRepositoriesUseCase from '@domain/useCases/FetchUserRepositoriesUseCase';

import { FakeRepository } from '@tests/fakers/entities';
import { FakeUserRepoRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeUserRepoRepository();
  const useCase = new FetchUserRepositoriesUseCase(repository);

  return { repository, useCase };
};

describe('FetchUserRepositoriesUseCase', () => {
  it("should return all user's repositories", async () => {
    const { repository, useCase } = makeUseCase();

    repository.mockRepository(new FakeRepository({}));
    repository.mockRepository(new FakeRepository({}));

    const repositories = await useCase.execute({ user: faker.string.uuid() });

    expect(repositories).toHaveLength(2);
  });

  it('should throw an error if "user" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ user: '' })).rejects.toThrow(
      'The user is required'
    );
  });
});
