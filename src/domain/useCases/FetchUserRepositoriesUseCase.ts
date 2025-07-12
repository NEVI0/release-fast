import { FetchUserRepositoriesDTO } from '@domain/dtos';
import { UserRepoRepositoryAbstract } from '@domain/repositories';

export default class FetchUserRepositoriesUseCase {
  constructor(
    private readonly userRepoRepository: UserRepoRepositoryAbstract
  ) {}

  public async execute(dto: FetchUserRepositoriesDTO) {
    this.validateDto(dto);
    return this.userRepoRepository.findAll(dto.user, dto.search);
  }

  private validateDto(dto: FetchUserRepositoriesDTO) {
    if (!dto.user) {
      throw new Error('The user is required');
    }
  }
}
