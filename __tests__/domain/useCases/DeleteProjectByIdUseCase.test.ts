import { faker } from '@faker-js/faker/locale/en';

import DeleteProjectByIdUseCase from '@domain/useCases/DeleteProjectByIdUseCase';

import { FakeProject } from '@tests/fakers/entities';
import { FakeProjectRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeProjectRepository();
  const useCase = new DeleteProjectByIdUseCase(repository);

  return { repository, useCase };
};

describe('DeleteProjectByIdUseCase', () => {
  it('should delete project correctly', async () => {
    const { repository, useCase } = makeUseCase();

    const id = faker.string.uuid();

    repository.mockProject(new FakeProject({ id }));
    repository.mockProject(new FakeProject({}));

    await useCase.execute({ id });
    const project = await repository.findById(id);

    expect(project).toBeNull();
  });

  it('should throw an error if "id" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ id: '' })).rejects.toThrow(
      'The project ID is required'
    );
  });
});
