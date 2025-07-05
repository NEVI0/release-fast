import 'server-only';

import DeleteProjectByIdUseCase from '@domain/useCases/DeleteProjectByIdUseCase';
import makeProjectRepository from '@factories/repositories/makeProjectRepository';

let instance: DeleteProjectByIdUseCase | null = null;

export default function makeDeleteProjectByIdUseCase() {
  if (!instance) {
    const projectRepository = makeProjectRepository();
    instance = new DeleteProjectByIdUseCase(projectRepository);
  }

  return instance;
}
