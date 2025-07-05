import 'server-only';

import DeleteUserByIdUseCase from '@domain/useCases/DeleteUserByIdUseCase';
import makeUserRepository from '@factories/repositories/makeUserRepository';

let instance: DeleteUserByIdUseCase | null = null;

export default function makeDeleteUserByIdUseCase() {
  if (!instance) {
    const userRepository = makeUserRepository();
    instance = new DeleteUserByIdUseCase(userRepository);
  }

  return instance;
}
