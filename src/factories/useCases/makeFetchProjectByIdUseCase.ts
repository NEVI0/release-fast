import 'server-only';

import { FetchProjectByIdUseCase } from '@domain/useCases';
import { makeProjectRepository } from '@factories/repositories';

let instance: FetchProjectByIdUseCase | null = null;

export default function makeFetchProjectByIdUseCase() {
  if (!instance) {
    const projectRepository = makeProjectRepository();
    instance = new FetchProjectByIdUseCase(projectRepository);
  }

  return instance;
}
