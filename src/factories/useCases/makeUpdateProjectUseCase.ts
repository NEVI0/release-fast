import 'server-only';

import { UpdateProjectUseCase } from '@domain/useCases';
import { makeProjectRepository } from '@factories/repositories';

let instance: UpdateProjectUseCase | null = null;

export default function makeUpdateProjectUseCase() {
  if (!instance) {
    const projectRepository = makeProjectRepository();
    instance = new UpdateProjectUseCase(projectRepository);
  }

  return instance;
}
