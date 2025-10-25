import { faker } from '@faker-js/faker/locale/en';

import FetchDashboardKPIsUseCase from '@domain/useCases/FetchDashboardKPIsUseCase';

import { FakeProject, FakeRelease } from '@tests/fakers/entities';
import {
  FakeProjectRepository,
  FakeReleaseRepository,
} from '@tests/fakers/repositories';

const makeUseCase = () => {
  const projectRepository = new FakeProjectRepository();
  const releaseRepository = new FakeReleaseRepository();

  const useCase = new FetchDashboardKPIsUseCase(
    projectRepository,
    releaseRepository
  );

  return { projectRepository, releaseRepository, useCase };
};

describe('FetchDashboardKPIsUseCase', () => {
  it("should return all KPI's correctly", async () => {
    const { projectRepository, releaseRepository, useCase } = makeUseCase();

    const userId = faker.string.uuid();
    const projectId = faker.string.uuid();

    projectRepository.mockProject(new FakeProject({ id: projectId, userId }));
    releaseRepository.mockRelease(new FakeRelease({ projectId }));
    releaseRepository.mockRelease(new FakeRelease({ projectId }));

    const kpis = await useCase.execute({ userId });

    expect(kpis.projects).toBe(1);
    expect(kpis.releases).toBe(2);
  });

  it('should throw an error if "id" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ userId: '' })).rejects.toThrow(
      'The user ID is required'
    );
  });
});
