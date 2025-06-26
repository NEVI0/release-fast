import 'server-only';

import { DeleteReleaseByIdUseCase } from '@domain/useCases';
import { makeReleaseRepository } from '@factories/repositories';

let instance: DeleteReleaseByIdUseCase | null = null;

export default function makeDeleteReleaseByIdUseCase() {
  if (!instance) {
    const releaseRepository = makeReleaseRepository();
    instance = new DeleteReleaseByIdUseCase(releaseRepository);
  }

  return instance;
}
