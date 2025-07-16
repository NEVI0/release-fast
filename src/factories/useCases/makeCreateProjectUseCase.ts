import 'server-only';

import CreateProjectUseCase from '@domain/useCases/CreateProjectUseCase';

import makeProjectRepository from '@factories/repositories/makeProjectRepository';
import makeUserRepository from '@factories/repositories/makeUserRepository';

let instance: CreateProjectUseCase | null = null;

export default function makeCreateProjectUseCase() {
  if (!instance) {
    const projectRepository = makeProjectRepository();
    const userRepository = makeUserRepository();

    instance = new CreateProjectUseCase(projectRepository, userRepository);
  }

  return instance;
}
