import { faker } from '@faker-js/faker/locale/en';

import { CreateReleaseDTO } from '@domain/dtos';
import CreateReleaseUseCase from '@domain/useCases/CreateReleaseUseCase';

import { FakeUser } from '@tests/fakers/entities';
import {
  FakeReleaseRepository,
  FakeUserRepository,
} from '@tests/fakers/repositories';

const makeUseCase = () => {
  const releaseRepository = new FakeReleaseRepository();
  const userRepository = new FakeUserRepository();

  const useCase = new CreateReleaseUseCase(releaseRepository, userRepository);

  return { releaseRepository, userRepository, useCase };
};

describe('CreateReleaseUseCase', () => {
  const baseDto: CreateReleaseDTO = {
    title: faker.word.noun(),
    shortDescription: faker.lorem.words(3),
    fullDescription: faker.lorem.words(3),
    version: faker.string.numeric(),
    baseBranch: faker.word.noun(),
    headBranch: faker.word.noun(),
    projectId: faker.string.uuid(),
    availableAt: faker.date.soon(),
    userId: faker.string.uuid(),
  };

  it('should create release correctly', async () => {
    const { userRepository, useCase } = makeUseCase();

    const userId = faker.string.uuid();
    userRepository.mockUser(new FakeUser({ id: userId, plan: 'starter' }));

    const dto: CreateReleaseDTO = {
      ...baseDto,
      userId,
    };

    const release = await useCase.execute(dto);

    expect(release.id).toBeDefined();
    expect(release.title).toBe(dto.title);
    expect(release.shortDescription).toBe(dto.shortDescription);
    expect(release.fullDescription).toBe(dto.fullDescription);
    expect(release.version).toBe(dto.version);
    expect(release.baseBranch).toBe(dto.baseBranch);
    expect(release.headBranch).toBe(dto.headBranch);
    expect(release.projectId).toBe(dto.projectId);
    expect(release.availableAt).toBe(dto.availableAt);
    expect(release.createdAt).toBeDefined();
  });

  it.each([
    {
      field: 'baseBranch',
      expectedError: 'You must provide the base branch name',
      dto: { ...baseDto, baseBranch: '' },
    },
    {
      field: 'headBranch',
      expectedError: 'You must provide the head branch name',
      dto: { ...baseDto, headBranch: '' },
    },
    {
      field: 'title',
      expectedError: 'You must provide the release title',
      dto: { ...baseDto, title: '' },
    },
    {
      field: 'version',
      expectedError: 'You must provide the release version',
      dto: { ...baseDto, version: '' },
    },
    {
      field: 'shortDescription',
      expectedError: 'You must provide a short description',
      dto: { ...baseDto, shortDescription: '' },
    },
    {
      field: 'fullDescription',
      expectedError: 'You must provide the full description',
      dto: { ...baseDto, fullDescription: '' },
    },
    {
      field: 'availableAt',
      expectedError: 'You must provide the available date',
      dto: { ...baseDto, availableAt: '' },
    },
    {
      field: 'projectId',
      expectedError: 'The project ID is required',
      dto: { ...baseDto, projectId: '' },
    },
    {
      field: 'userId',
      expectedError: 'The user ID is required',
      dto: { ...baseDto, userId: '' },
    },
  ])(
    'should throw an error if "$field" is missing',
    async ({ dto, expectedError }) => {
      const { useCase } = makeUseCase();

      await expect(useCase.execute(dto as CreateReleaseDTO)).rejects.toThrow(
        expectedError
      );
    }
  );

  it('should throw an error if user is not authenticated', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute(baseDto)).rejects.toThrow('Unauthorized');
  });

  it('should create release correctly if user is in free trial', async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2025-01-01'));

    const { userRepository, useCase } = makeUseCase();

    const userId = faker.string.uuid();
    userRepository.mockUser(
      new FakeUser({
        id: userId,
        plan: 'free',
        createdAt: new Date('2025-01-02'),
      })
    );

    const dto: CreateReleaseDTO = {
      ...baseDto,
      userId,
    };

    const release = await useCase.execute(dto);

    expect(release.id).toBeDefined();
  });

  it("should throw an error if user's free trial has ended", async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2025-01-01'));

    const { userRepository, useCase } = makeUseCase();

    const userId = faker.string.uuid();
    userRepository.mockUser(
      new FakeUser({
        id: userId,
        plan: 'free',
        createdAt: new Date('2024-01-01'),
      })
    );

    const dto: CreateReleaseDTO = {
      ...baseDto,
      userId,
    };

    await expect(useCase.execute(dto)).rejects.toThrow(
      'You can not create new releases unless you upgrade your plan'
    );
  });
});
