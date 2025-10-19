import { faker } from '@faker-js/faker/locale/en';

import FetchAllReleasesUseCase from '@domain/useCases/FetchAllReleasesUseCase';

import { FakeRelease } from '@tests/fakers/entities';
import { FakeReleaseRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeReleaseRepository();
  const useCase = new FetchAllReleasesUseCase(repository);

  return { repository, useCase };
};

describe('FetchAllReleasesUseCase', () => {
  it("should return all project's release correctly", async () => {
    const { repository, useCase } = makeUseCase();

    const projectId = faker.string.uuid();

    repository.mockRelease(new FakeRelease({ projectId }));
    repository.mockRelease(new FakeRelease({ projectId }));
    repository.mockRelease(new FakeRelease({}));

    const releases = await useCase.execute({ projectId });

    expect(releases).toHaveLength(2);
    releases.forEach((release) => {
      expect(release.projectId).toBe(projectId);
    });
  });

  it('should throw an error if "id" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ projectId: '' })).rejects.toThrow(
      'The project ID is required'
    );
  });
});
