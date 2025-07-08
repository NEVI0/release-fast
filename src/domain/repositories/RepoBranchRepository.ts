export default interface RepoBranchRepositoryAbstract {
  compare(
    repository: string,
    baseBranch: string,
    headBranch: string
  ): Promise<string>;
}
