import 'server-only';

import { FetchReleaseByIdUseCase } from '@domain/useCases';
import { makeReleaseRepository } from '@factories/repositories';

let instance: FetchReleaseByIdUseCase | null = null;

export default function makeFetchReleaseByIdUseCase() {
  if (!instance) {
    const releaseRepository = makeReleaseRepository();
    instance = new FetchReleaseByIdUseCase(releaseRepository);
  }

  return instance;
}
