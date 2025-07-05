import 'server-only';

import FetchUserByIdUseCase from '@domain/useCases/FetchUserByIdUseCase';
import makeUserRepository from '@factories/repositories/makeUserRepository';

let instance: FetchUserByIdUseCase | null = null;

export default function makeFetchUserByIdUseCase() {
  if (!instance) {
    const userRepository = makeUserRepository();
    instance = new FetchUserByIdUseCase(userRepository);
  }

  return instance;
}
