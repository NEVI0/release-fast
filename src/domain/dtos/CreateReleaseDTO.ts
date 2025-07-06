export default interface CreateReleaseDTO {
  title: string;
  shortDescription: string;
  fullDescription: string;
  version: string;
  projectId: string;
  availableAt: Date | string;
}
