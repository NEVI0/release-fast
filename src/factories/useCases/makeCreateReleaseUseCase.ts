import 'server-only';

import CreateReleaseUseCase from '@domain/useCases/CreateReleaseUseCase';
import makeReleaseRepository from '@factories/repositories/makeReleaseRepository';

let instance: CreateReleaseUseCase | null = null;

export default function makeCreateReleaseUseCase() {
  if (!instance) {
    const releaseRepository = makeReleaseRepository();
    instance = new CreateReleaseUseCase(releaseRepository);
  }

  return instance;
}
