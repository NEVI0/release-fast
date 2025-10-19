import { faker } from '@faker-js/faker';

import { MAX_DESCRIPTION_LENGTH } from '@domain/constants/project';
import { CreateProjectDTO } from '@domain/dtos';
import CreateProjectUseCase from '@domain/useCases/CreateProjectUseCase';

import {
  FakeProjectRepository,
  FakeUserRepository,
} from '@tests/fakers/repositories';
import { FakeProject, FakeUser } from '@tests/fakers/entities';

const makeUseCase = () => {
  const projectRespository = new FakeProjectRepository();
  const userRespository = new FakeUserRepository();

  const useCase = new CreateProjectUseCase(projectRespository, userRespository);

  return { projectRespository, userRespository, useCase };
};

describe('CreateProjectUseCase', () => {
  const baseDto: CreateProjectDTO = {
    name: faker.person.firstName(),
    description: faker.lorem.words(3),
    userId: faker.string.uuid(),
    repository: {
      id: faker.string.uuid(),
      name: faker.word.noun(),
      provider: faker.word.noun(),
      url: faker.internet.url(),
    },
  };

  it('should create project correctly', async () => {
    const { useCase, userRespository } = makeUseCase();

    const userId = faker.string.uuid();
    userRespository.mockUser(new FakeUser({ id: userId, plan: 'enterprise' }));

    const dto: CreateProjectDTO = {
      ...baseDto,
      userId,
    };

    const project = await useCase.execute(dto);

    expect(project.id).toBeDefined();
    expect(project.name).toBe(dto.name);
    expect(project.description).toBe(dto.description);
    expect(project.userId).toBe(dto.userId);
    expect(project.repository).toBe(dto.repository);
    expect(project.createdAt).toBeDefined();
    expect(project.updatedAt).toBeDefined();
  });

  it('should create project correctly for user with free plan and two projects already created', async () => {
    const { useCase, userRespository, projectRespository } = makeUseCase();

    const userId = faker.string.uuid();
    userRespository.mockUser(new FakeUser({ id: userId, plan: 'free' }));

    projectRespository.mockProject(new FakeProject({ userId }));
    projectRespository.mockProject(new FakeProject({ userId }));

    const dto: CreateProjectDTO = {
      ...baseDto,
      userId,
    };

    const project = await useCase.execute(dto);

    expect(project.id).toBeDefined();
    expect(project.name).toBe(dto.name);
    expect(project.description).toBe(dto.description);
    expect(project.userId).toBe(dto.userId);
    expect(project.repository).toBe(dto.repository);
    expect(project.createdAt).toBeDefined();
    expect(project.updatedAt).toBeDefined();
  });

  it.each([
    {
      field: 'name',
      condition: 'missing',
      expectedError: 'You must provide the project name',
      dto: {
        ...baseDto,
        name: '',
      },
    },
    {
      field: 'description',
      condition: 'missing',
      expectedError: 'You must provide the project description',
      dto: {
        ...baseDto,
        description: '',
      },
    },
    {
      field: 'description',
      condition: 'not valid',
      expectedError: `The description should have less than ${MAX_DESCRIPTION_LENGTH} characters`,
      dto: {
        ...baseDto,
        description: faker.lorem.paragraphs(),
      },
    },
    {
      field: 'repository.id',
      condition: 'missing',
      expectedError: 'The repository ID is required',
      dto: {
        ...baseDto,
        repository: {
          ...baseDto.repository,
          id: '',
        },
      },
    },
    {
      field: 'repository.provider',
      condition: 'missing',
      expectedError: 'The repository provider is required',
      dto: {
        ...baseDto,
        repository: {
          ...baseDto.repository,
          provider: '',
        },
      },
    },
    {
      field: 'repository.name',
      condition: 'missing',
      expectedError: 'You must provide the project repository',
      dto: {
        ...baseDto,
        repository: {
          ...baseDto.repository,
          name: '',
        },
      },
    },
    {
      field: 'repository.url',
      condition: 'missing',
      expectedError: 'You must provide the project repository URL',
      dto: {
        ...baseDto,
        repository: {
          ...baseDto.repository,
          url: '',
        },
      },
    },
    {
      field: 'userId',
      condition: 'missing',
      expectedError: 'The user ID is required',
      dto: {
        ...baseDto,
        userId: '',
      },
    },
  ])(
    'should throw an error if "$field" is $condition',
    async ({ dto, expectedError }) => {
      const { useCase } = makeUseCase();

      await expect(useCase.execute(dto as CreateProjectDTO)).rejects.toThrow(
        expectedError
      );
    }
  );

  it('should throw an error if user is not authenticated', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute(baseDto)).rejects.toThrow('Unauthorized');
  });

  it('should throw an error if user can not create new projects', async () => {
    const { useCase, userRespository, projectRespository } = makeUseCase();

    const userId = faker.string.uuid();
    userRespository.mockUser(new FakeUser({ id: userId, plan: 'free' }));

    projectRespository.mockProject(new FakeProject({ userId }));
    projectRespository.mockProject(new FakeProject({ userId }));
    projectRespository.mockProject(new FakeProject({ userId }));

    const dto: CreateProjectDTO = {
      ...baseDto,
      userId,
    };

    await expect(useCase.execute(dto)).rejects.toThrow(
      'You can not create new projects unless you upgrade your plan'
    );
  });
});
