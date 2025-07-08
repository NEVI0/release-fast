import { HttpProviderAbstract } from '@domain/providers';
import { RepoBranchRepositoryAbstract } from '@domain/repositories';

export default class GithubRepoBranchRepository
  implements RepoBranchRepositoryAbstract
{
  constructor(private readonly httpProvider: HttpProviderAbstract) {}

  public async compare(
    repository: string,
    baseBranch: string,
    headBranch: string
  ) {
    const url = `/repos/${repository}/compare/${baseBranch}...${headBranch}`;

    return await this.httpProvider.get<string>(url, {
      responseAsText: true,
    });
  }
}
