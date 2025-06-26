import 'server-only';

import { FetchAllProjectsUseCase } from '@domain/useCases';
import { makeProjectRepository } from '@factories/repositories';

let instance: FetchAllProjectsUseCase | null = null;

export default function makeFetchAllProjectsUseCase() {
  if (!instance) {
    const projectRepository = makeProjectRepository();
    instance = new FetchAllProjectsUseCase(projectRepository);
  }

  return instance;
}
