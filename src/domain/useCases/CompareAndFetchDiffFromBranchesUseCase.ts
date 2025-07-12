import { CompareAndFetchDiffFromBranchesDTO } from '@domain/dtos';
import { RepoBranchRepositoryAbstract } from '@domain/repositories';

export default class CompareAndFetchDiffFromBranchesUseCase {
  constructor(
    private readonly repoBranchRepository: RepoBranchRepositoryAbstract
  ) {}

  public async execute(dto: CompareAndFetchDiffFromBranchesDTO) {
    this.validateDto(dto);

    return this.repoBranchRepository.compare(
      dto.repository,
      dto.baseBranch,
      dto.headBranch
    );
  }

  private validateDto(dto: CompareAndFetchDiffFromBranchesDTO) {
    if (!dto.repository) {
      throw new Error('The repository name is required');
    }

    if (!dto.baseBranch) {
      throw new Error('You must provide the base branch name');
    }

    if (!dto.headBranch) {
      throw new Error('You must provide the head branch name');
    }
  }
}
