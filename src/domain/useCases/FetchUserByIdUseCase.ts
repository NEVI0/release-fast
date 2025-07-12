import 'server-only';

import { FetchUserByIdDTO } from '@domain/dtos';
import { UserRepositoryAbstract } from '@domain/repositories';

export default class FetchUserByIdUseCase {
  constructor(private readonly userRepository: UserRepositoryAbstract) {}

  public async execute(dto: FetchUserByIdDTO) {
    this.validateDto(dto);
    return this.userRepository.findById(dto.id);
  }

  private validateDto(dto: FetchUserByIdDTO) {
    if (!dto.id) {
      throw new Error('The user ID is required');
    }
  }
}
