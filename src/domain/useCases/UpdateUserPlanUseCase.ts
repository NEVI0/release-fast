import 'server-only';

import { User, UserAbstract } from '@domain/entities';
import { UpdateUserPlanDTO } from '@domain/dtos';
import { UserRepositoryAbstract } from '@domain/repositories';

export default class UpdateUserPlanUseCase {
  constructor(private readonly userRepository: UserRepositoryAbstract) {}

  public async execute(dto: UpdateUserPlanDTO) {
    this.validateDto(dto);
    const user = await this.fetchUserData(dto.userId);

    await this.userRepository.update(
      new User({
        ...user,
        plan: dto.plan,
      })
    );
  }

  private validateDto(dto: UpdateUserPlanDTO) {
    if (!dto.userId) {
      throw new Error('The user ID is required');
    }

    if (!dto.plan) {
      throw new Error('The selected plan is required');
    }
  }

  private async fetchUserData(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user || !user.paymentId) throw new Error('Unauthorized');

    return user as UserAbstract;
  }
}
