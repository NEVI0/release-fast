import { faker } from '@faker-js/faker';

import { MAX_DESCRIPTION_LENGTH } from '@domain/constants/project';
import { UpdateProjectDTO } from '@domain/dtos';
import UpdateProjectUseCase from '@domain/useCases/UpdateProjectUseCase';

import { FakeProject } from '@tests/fakers/entities';
import { FakeProjectRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeProjectRepository();
  const useCase = new UpdateProjectUseCase(repository);

  return { repository, useCase };
};

describe('UpdateProjectUseCase', () => {
  const baseDto: UpdateProjectDTO = {
    id: faker.string.uuid(),
    name: faker.word.noun(),
    description: faker.lorem.words(3),
  };

  it('should update project correctly', async () => {
    const { repository, useCase } = makeUseCase();

    const id = faker.string.uuid();
    const updatedAt = faker.date.recent();

    repository.mockProject(new FakeProject({ id, updatedAt }));

    const dto: UpdateProjectDTO = { ...baseDto, id };
    const project = await useCase.execute(dto);

    expect(project.id).toBe(id);
    expect(project.name).toBe(dto.name);
    expect(project.description).toBe(dto.description);
    expect(project.updatedAt).not.toBe(updatedAt);
  });

  it('should throw an error if "id" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ ...baseDto, id: '' })).rejects.toThrow(
      'The project ID is required'
    );
  });

  it('should throw an error if project not found', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute(baseDto)).rejects.toThrow('Project not found');
  });

  it.each([
    {
      field: 'name',
      condition: 'missing',
      expectedError: 'You must provide the project name',
      dto: { ...baseDto, name: '' },
    },
    {
      field: 'description',
      condition: 'missing',
      expectedError: 'You must provide the project description',
      dto: { ...baseDto, description: '' },
    },
    {
      field: 'description',
      condition: 'not valid',
      expectedError: `The description should have less than ${MAX_DESCRIPTION_LENGTH} characters`,
      dto: { ...baseDto, description: faker.lorem.paragraphs() },
    },
  ])(
    'should throw an error if "$field" is $condition',
    async ({ dto, expectedError }) => {
      const { repository, useCase } = makeUseCase();

      const id = faker.string.uuid();
      repository.mockProject(new FakeProject({ id }));

      await expect(
        useCase.execute({ ...dto, id } as UpdateProjectDTO)
      ).rejects.toThrow(expectedError);
    }
  );
});
