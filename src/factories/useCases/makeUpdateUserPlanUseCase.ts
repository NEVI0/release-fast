import 'server-only';

import UpdateUserPlanUseCase from '@domain/useCases/UpdateUserPlanUseCase';
import makeUserRepository from '@factories/repositories/makeUserRepository';

let instance: UpdateUserPlanUseCase | null = null;

export default function makeUpdateUserPlanUseCase() {
  if (!instance) {
    const userRepository = makeUserRepository();
    instance = new UpdateUserPlanUseCase(userRepository);
  }

  return instance;
}
