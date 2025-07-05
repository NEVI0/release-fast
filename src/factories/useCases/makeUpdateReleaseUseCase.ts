import 'server-only';

import UpdateReleaseUseCase from '@domain/useCases/UpdateReleaseUseCase';
import makeReleaseRepository from '@factories/repositories/makeReleaseRepository';

let instance: UpdateReleaseUseCase | null = null;

export default function makeUpdateReleaseUseCase() {
  if (!instance) {
    const releaseRepository = makeReleaseRepository();
    instance = new UpdateReleaseUseCase(releaseRepository);
  }

  return instance;
}
