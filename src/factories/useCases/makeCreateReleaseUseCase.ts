import 'server-only';

import CreateReleaseUseCase from '@domain/useCases/CreateReleaseUseCase';

import makeReleaseRepository from '@factories/repositories/makeReleaseRepository';
import makeUserRepository from '@factories/repositories/makeUserRepository';

let instance: CreateReleaseUseCase | null = null;

export default function makeCreateReleaseUseCase() {
  if (!instance) {
    const releaseRepository = makeReleaseRepository();
    const userRepository = makeUserRepository();

    instance = new CreateReleaseUseCase(releaseRepository, userRepository);
  }

  return instance;
}
