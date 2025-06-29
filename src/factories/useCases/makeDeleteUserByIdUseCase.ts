import 'server-only';

import { DeleteUserByIdUseCase } from '@domain/useCases';
import { makeUserRepository } from '@factories/repositories';

let instance: DeleteUserByIdUseCase | null = null;

export default function makeDeleteUserByIdUseCase() {
  if (!instance) {
    const userRepository = makeUserRepository();
    instance = new DeleteUserByIdUseCase(userRepository);
  }

  return instance;
}
