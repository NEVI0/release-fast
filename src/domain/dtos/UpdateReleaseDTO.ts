export default interface UpdateReleaseDTO {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  version: string;
  baseBranch: string;
  headBranch: string;
  availableAt: Date | string;
}
