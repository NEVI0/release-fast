export default interface CreateReleaseDTO {
  title: string;
  shortDescription: string;
  fullDescription: string;
  version: string;
  baseBranch: string;
  headBranch: string;
  projectId: string;
  availableAt: Date | string;
}
