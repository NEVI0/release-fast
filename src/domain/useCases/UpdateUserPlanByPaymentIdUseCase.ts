import 'server-only';

import { User, UserAbstract } from '@domain/entities';
import { UpdateUserPlanByPaymentIdDTO } from '@domain/dtos';
import { UserRepositoryAbstract } from '@domain/repositories';

export default class UpdateUserPlanByPaymentIdUseCase {
  constructor(private readonly userRepository: UserRepositoryAbstract) {}

  public async execute(dto: UpdateUserPlanByPaymentIdDTO) {
    this.validateDto(dto);
    const user = await this.fetchUserData(dto.paymentId);

    await this.userRepository.updateByPaymentId(
      new User({
        ...user,
        plan: dto.plan,
      })
    );
  }

  private validateDto(dto: UpdateUserPlanByPaymentIdDTO) {
    if (!dto.paymentId) {
      throw new Error('The user payment ID is required');
    }

    if (!dto.plan) {
      throw new Error('The selected plan is required');
    }
  }

  private async fetchUserData(id: string) {
    const user = await this.userRepository.findByPaymentId(id);
    if (!user || !user.paymentId) throw new Error('Unauthorized');

    return user as UserAbstract;
  }
}
