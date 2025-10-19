import { faker } from '@faker-js/faker/locale/en';

import FetchAllProjectsUseCase from '@domain/useCases/FetchAllProjectsUseCase';

import { FakeProject } from '@tests/fakers/entities';
import { FakeProjectRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeProjectRepository();
  const useCase = new FetchAllProjectsUseCase(repository);

  return { repository, useCase };
};

describe('FetchAllProjectsUseCase', () => {
  it("should return all user's projects correctly", async () => {
    const { repository, useCase } = makeUseCase();

    const userId = faker.string.uuid();

    repository.mockProject(new FakeProject({ userId }));
    repository.mockProject(new FakeProject({ userId }));
    repository.mockProject(new FakeProject({}));

    const projects = await useCase.execute({ userId });

    expect(projects).toHaveLength(2);
    projects.forEach((project) => {
      expect(project.userId).toBe(userId);
    });
  });

  it('should throw an error if "id" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ userId: '' })).rejects.toThrow(
      'The user ID is required'
    );
  });
});
