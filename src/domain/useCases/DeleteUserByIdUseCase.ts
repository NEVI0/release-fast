import 'server-only';

import { DeleteProjectByIdDTO } from '@domain/dtos';
import { UserRepositoryAbstract } from '@domain/repositories';

export default class DeleteUserByIdUseCase {
  constructor(private readonly userRepository: UserRepositoryAbstract) {}

  public async execute(dto: DeleteProjectByIdDTO) {
    await this.userRepository.deleteById(dto.id);
  }
}
