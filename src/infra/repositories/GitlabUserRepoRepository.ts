import { Repository } from '@domain/entities';
import { HttpProviderAbstract } from '@domain/providers';
import { UserRepoRepositoryAbstract } from '@domain/repositories';

interface GitlabSearchResponde {
  id: number;
  name: string;
  path_with_namespace: string;
  visibility: 'public' | 'private';
  description?: string;
  web_url: string;
}

export default class GitlabUserRepoRepository
  implements UserRepoRepositoryAbstract
{
  constructor(private readonly httpProvider: HttpProviderAbstract) {}

  public async findAll(_: string, search?: string) {
    const items = await this.httpProvider.get<GitlabSearchResponde[]>(
      '/projects',
      {
        params: {
          simple: 'true',
          membership: 'true',
          search: search || '',
        },
      }
    );

    if (!items.length) return [];

    return items.map(
      (repo) =>
        new Repository({
          id: repo.id,
          name: repo.name,
          fullname: repo.path_with_namespace,
          private: repo.visibility === 'private',
          description: repo.description,
          url: repo.web_url,
        })
    );
  }
}
