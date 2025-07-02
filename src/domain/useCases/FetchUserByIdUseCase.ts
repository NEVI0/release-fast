import 'server-only';

import { FetchUserByIdDTO } from '@domain/dtos';
import { UserRepositoryAbstract } from '@domain/repositories';

export default class FetchUserByIdUseCase {
  constructor(private readonly userRepository: UserRepositoryAbstract) {}

  public async execute(dto: FetchUserByIdDTO) {
    return this.userRepository.findById(dto.id);
  }
}
