import { faker } from '@faker-js/faker/locale/en';

import DeleteReleaseByIdUseCase from '@domain/useCases/DeleteReleaseByIdUseCase';

import { FakeRelease } from '@tests/fakers/entities';
import { FakeReleaseRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeReleaseRepository();
  const useCase = new DeleteReleaseByIdUseCase(repository);

  return { repository, useCase };
};

describe('DeleteReleaseByIdUseCase', () => {
  it('should delete release correctly', async () => {
    const { repository, useCase } = makeUseCase();

    const id = faker.string.uuid();

    repository.mockRelease(new FakeRelease({ id }));
    repository.mockRelease(new FakeRelease({}));

    await useCase.execute({ id });
    const release = await repository.findById(id);

    expect(release).toBeNull();
  });

  it('should throw an error if "id" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ id: '' })).rejects.toThrow(
      'The release ID is required'
    );
  });
});
