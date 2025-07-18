import 'server-only';

import UpdateUserDataUseCase from '@domain/useCases/UpdateUserDataUseCase';
import makeUserRepository from '@factories/repositories/makeUserRepository';

let instance: UpdateUserDataUseCase | null = null;

export default function makeUpdateUserDataUseCase() {
  if (!instance) {
    const userRepository = makeUserRepository();
    instance = new UpdateUserDataUseCase(userRepository);
  }

  return instance;
}
