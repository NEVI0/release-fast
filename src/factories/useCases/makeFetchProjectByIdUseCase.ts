import 'server-only';

import FetchProjectByIdUseCase from '@domain/useCases/FetchProjectByIdUseCase';
import makeProjectRepository from '@factories/repositories/makeProjectRepository';

let instance: FetchProjectByIdUseCase | null = null;

export default function makeFetchProjectByIdUseCase() {
  if (!instance) {
    const projectRepository = makeProjectRepository();
    instance = new FetchProjectByIdUseCase(projectRepository);
  }

  return instance;
}
