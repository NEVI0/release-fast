import 'server-only';

import DeleteReleaseByIdUseCase from '@domain/useCases/DeleteReleaseByIdUseCase';
import makeReleaseRepository from '@factories/repositories/makeReleaseRepository';

let instance: DeleteReleaseByIdUseCase | null = null;

export default function makeDeleteReleaseByIdUseCase() {
  if (!instance) {
    const releaseRepository = makeReleaseRepository();
    instance = new DeleteReleaseByIdUseCase(releaseRepository);
  }

  return instance;
}
