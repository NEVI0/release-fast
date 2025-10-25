import { faker } from '@faker-js/faker/locale/en';

import { CompareAndFetchDiffFromBranchesDTO } from '@domain/dtos';
import CompareAndFetchDiffFromBranchesUseCase from '@domain/useCases/CompareAndFetchDiffFromBranchesUseCase';

import { FakeRepoBranchRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeRepoBranchRepository();
  const useCase = new CompareAndFetchDiffFromBranchesUseCase(repository);

  return { repository, useCase };
};

describe('CompareAndFetchDiffFromBranchesUseCase', () => {
  it('should compare diff correctly', async () => {
    const { repository, useCase } = makeUseCase();

    await useCase.execute({
      repository: faker.word.noun(),
      baseBranch: faker.word.noun(),
      headBranch: faker.word.noun(),
    });

    expect(repository.compare).toHaveBeenCalled();
  });

  it.each([
    {
      field: 'repository',
      expectedError: 'The repository name is required',
      dto: {
        repository: '',
        baseBranch: faker.word.noun(),
        headBranch: faker.word.noun(),
      },
    },
    {
      field: 'baseBranch',
      expectedError: 'You must provide the base branch name',
      dto: {
        repository: faker.word.noun(),
        baseBranch: '',
        headBranch: faker.word.noun(),
      },
    },
    {
      field: 'headBranch',
      expectedError: 'You must provide the head branch name',
      dto: {
        repository: faker.word.noun(),
        baseBranch: faker.word.noun(),
        headBranch: '',
      },
    },
  ])(
    'should throw an error if "$field" is missing',
    async ({ dto, expectedError }) => {
      const { useCase } = makeUseCase();

      await expect(
        useCase.execute(dto as CompareAndFetchDiffFromBranchesDTO)
      ).rejects.toThrow(expectedError);
    }
  );
});
