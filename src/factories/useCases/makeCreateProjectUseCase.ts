import 'server-only';

import { CreateProjectUseCase } from '@domain/useCases';
import { makeProjectRepository } from '@factories/repositories';

let instance: CreateProjectUseCase | null = null;

export default function makeCreateProjectUseCase() {
  if (!instance) {
    const projectRepository = makeProjectRepository();
    instance = new CreateProjectUseCase(projectRepository);
  }

  return instance;
}
