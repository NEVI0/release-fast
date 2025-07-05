import 'server-only';

import UpdateProjectUseCase from '@domain/useCases/UpdateProjectUseCase';
import makeProjectRepository from '@factories/repositories/makeProjectRepository';

let instance: UpdateProjectUseCase | null = null;

export default function makeUpdateProjectUseCase() {
  if (!instance) {
    const projectRepository = makeProjectRepository();
    instance = new UpdateProjectUseCase(projectRepository);
  }

  return instance;
}
