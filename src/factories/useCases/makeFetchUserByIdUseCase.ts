import 'server-only';

import { FetchUserByIdUseCase } from '@domain/useCases';
import { makeUserRepository } from '@factories/repositories';

let instance: FetchUserByIdUseCase | null = null;

export default function makeFetchUserByIdUseCase() {
  if (!instance) {
    const userRepository = makeUserRepository();
    instance = new FetchUserByIdUseCase(userRepository);
  }

  return instance;
}
