export default interface CreateProjectDTO {
  name: string;
  description: string;
  userId: string;
  repository: {
    id: string;
    name: string;
    url: string;
    provider: string;
  };
}
