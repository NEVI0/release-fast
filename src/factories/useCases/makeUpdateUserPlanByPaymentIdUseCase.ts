import 'server-only';

import UpdateUserPlanByPaymentIdUseCase from '@domain/useCases/UpdateUserPlanByPaymentIdUseCase';
import makeUserRepository from '@factories/repositories/makeUserRepository';

let instance: UpdateUserPlanByPaymentIdUseCase | null = null;

export default function makeUpdateUserPlanByPaymentIdUseCase() {
  if (!instance) {
    const userRepository = makeUserRepository();
    instance = new UpdateUserPlanByPaymentIdUseCase(userRepository);
  }

  return instance;
}
