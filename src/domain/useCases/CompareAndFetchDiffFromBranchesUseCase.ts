import { CompareAndFetchDiffFromBranchesDTO } from '@domain/dtos';
import { RepoBranchRepositoryAbstract } from '@domain/repositories';

export default class CompareAndFetchDiffFromBranchesUseCase {
  constructor(
    private readonly repoBranchRepository: RepoBranchRepositoryAbstract
  ) {}

  public async execute(dto: CompareAndFetchDiffFromBranchesDTO) {
    return this.repoBranchRepository.compare(
      dto.repository,
      dto.baseBranch,
      dto.headBranch
    );
  }
}
