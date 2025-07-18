import 'server-only';

import { User, UserAbstract } from '@domain/entities';
import { UpdateUserDataDTO } from '@domain/dtos';
import { UserRepositoryAbstract } from '@domain/repositories';

export default class UpdateUserDataUseCase {
  constructor(private readonly userRepository: UserRepositoryAbstract) {}

  public async execute(dto: UpdateUserDataDTO) {
    this.validateDto(dto);
    const user = await this.fetchUserData(dto.id);

    return await this.userRepository.update(
      new User({
        ...user,
        name: dto.name,
        email: dto.email,
      })
    );
  }

  private validateDto(dto: UpdateUserDataDTO) {
    if (!dto.id) {
      throw new Error('The user ID is required');
    }

    if (!dto.name) {
      throw new Error('The name is required');
    }

    if (!dto.email) {
      throw new Error('The e-mail is required');
    }
  }

  private async fetchUserData(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user || !user.paymentId) throw new Error('Unauthorized');

    return user as UserAbstract;
  }
}
