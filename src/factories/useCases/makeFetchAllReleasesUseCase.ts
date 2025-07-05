import 'server-only';

import FetchAllReleasesUseCase from '@domain/useCases/FetchAllReleasesUseCase';
import makeReleaseRepository from '@factories/repositories/makeReleaseRepository';

let instance: FetchAllReleasesUseCase | null = null;

export default function makeFetchAllReleasesUseCase() {
  if (!instance) {
    const releaseRepository = makeReleaseRepository();
    instance = new FetchAllReleasesUseCase(releaseRepository);
  }

  return instance;
}
