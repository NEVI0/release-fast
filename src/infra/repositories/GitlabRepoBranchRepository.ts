import { HttpProviderAbstract } from '@domain/providers';
import { RepoBranchRepositoryAbstract } from '@domain/repositories';

export default class GitlabRepoBranchRepository
  implements RepoBranchRepositoryAbstract
{
  constructor(private readonly httpProvider: HttpProviderAbstract) {}

  public async compare(
    repository: string,
    baseBranch: string,
    headBranch: string
  ) {
    return await this.httpProvider.get<string>(
      `/projects/${repository}/repository/compare`,
      {
        responseAsText: true,
        params: {
          from: baseBranch,
          to: headBranch,
          straight: 'true',
        },
      }
    );
  }
}
