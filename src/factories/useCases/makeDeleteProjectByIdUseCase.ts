import 'server-only';

import { DeleteProjectByIdUseCase } from '@domain/useCases';
import { makeProjectRepository } from '@factories/repositories';

let instance: DeleteProjectByIdUseCase | null = null;

export default function makeDeleteProjectByIdUseCase() {
  if (!instance) {
    const projectRepository = makeProjectRepository();
    instance = new DeleteProjectByIdUseCase(projectRepository);
  }

  return instance;
}
