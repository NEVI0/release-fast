import { FetchUserRepositoriesDTO } from '@domain/dtos';
import { UserRepoRepositoryAbstract } from '@domain/repositories';

export default class FetchUserRepositoriesUseCase {
  constructor(
    private readonly userRepoRepository: UserRepoRepositoryAbstract
  ) {}

  public async execute(dto: FetchUserRepositoriesDTO) {
    return this.userRepoRepository.findAll(dto.token, dto.search);
  }
}
