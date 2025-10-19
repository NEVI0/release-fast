import { faker } from '@faker-js/faker';

import FetchProjectByIdUseCase from '@domain/useCases/FetchProjectByIdUseCase';

import { FakeProject } from '@tests/fakers/entities';
import { FakeProjectRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeProjectRepository();
  const useCase = new FetchProjectByIdUseCase(repository);

  return { repository, useCase };
};

describe('FetchProjectByIdUseCase', () => {
  it('should return project by ID', async () => {
    const { repository, useCase } = makeUseCase();

    const id = faker.string.uuid();

    repository.mockProject(new FakeProject({ id }));
    repository.mockProject(new FakeProject({}));

    const project = await useCase.execute({ id });

    expect(project?.id).toBe(id);
  });

  it('should return "null" to project not found', async () => {
    const { repository, useCase } = makeUseCase();

    repository.mockProject(new FakeProject({}));
    repository.mockProject(new FakeProject({}));

    const project = await useCase.execute({ id: faker.string.uuid() });

    expect(project).toBeNull();
  });

  it('should throw an error if "id" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ id: '' })).rejects.toThrow(
      'The project ID is required'
    );
  });
});
