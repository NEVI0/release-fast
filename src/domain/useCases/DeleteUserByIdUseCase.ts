import 'server-only';

import { DeleteProjectByIdDTO } from '@domain/dtos';
import { UserRepositoryAbstract } from '@domain/repositories';

export default class DeleteUserByIdUseCase {
  constructor(private readonly userRepository: UserRepositoryAbstract) {}

  public async execute(dto: DeleteProjectByIdDTO) {
    this.validateDto(dto);
    await this.userRepository.deleteById(dto.id);
  }

  private validateDto(dto: DeleteProjectByIdDTO) {
    if (!dto.id) {
      throw new Error('The user ID is required');
    }
  }
}
