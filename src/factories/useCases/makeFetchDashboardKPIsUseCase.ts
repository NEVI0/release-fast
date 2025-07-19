import 'server-only';

import FetchDashboardKPIsUseCase from '@domain/useCases/FetchDashboardKPIsUseCase';

import makeProjectRepository from '@factories/repositories/makeProjectRepository';
import makeReleaseRepository from '@factories/repositories/makeReleaseRepository';

let instance: FetchDashboardKPIsUseCase | null = null;

export default function makeFetchDashboardKPIsUseCase() {
  if (!instance) {
    const projectRepository = makeProjectRepository();
    const releaseRepository = makeReleaseRepository();

    instance = new FetchDashboardKPIsUseCase(
      projectRepository,
      releaseRepository
    );
  }

  return instance;
}
