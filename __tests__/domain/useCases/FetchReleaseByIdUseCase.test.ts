import { faker } from '@faker-js/faker';

import FetchReleaseByIdUseCase from '@domain/useCases/FetchReleaseByIdUseCase';

import { FakeRelease } from '@tests/fakers/entities';
import { FakeReleaseRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeReleaseRepository();
  const useCase = new FetchReleaseByIdUseCase(repository);

  return { repository, useCase };
};

describe('FetchReleaseByIdUseCase', () => {
  it('should return release by ID correctly', async () => {
    const { repository, useCase } = makeUseCase();

    const id = faker.string.uuid();

    repository.mockRelease(new FakeRelease({ id }));
    repository.mockRelease(new FakeRelease({}));

    const release = await useCase.execute({ id });

    expect(release?.id).toBe(id);
  });

  it('should return "null" to release not found', async () => {
    const { useCase } = makeUseCase();
    const release = await useCase.execute({ id: faker.string.uuid() });

    expect(release).toBeNull();
  });

  it('should throw an error if "id" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ id: '' })).rejects.toThrow(
      'The release ID is required'
    );
  });
});
