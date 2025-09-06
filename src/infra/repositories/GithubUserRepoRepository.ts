import { Repository } from '@domain/entities';
import { HttpProviderAbstract } from '@domain/providers';
import { UserRepoRepositoryAbstract } from '@domain/repositories';

interface GitHubSearchResponde {
  total_count: number;
  incomplete_results: boolean;
  items: any[];
}

export default class GithubUserRepoRepository
  implements UserRepoRepositoryAbstract
{
  constructor(private readonly httpProvider: HttpProviderAbstract) {}

  public async findAll(user: string, search?: string) {
    const { items } = await this.httpProvider.get<GitHubSearchResponde>(
      '/search/repositories',
      {
        params: this.buildParams(user, search),
      }
    );

    if (!items || !items.length) return [];

    return items.map(
      (repo) =>
        new Repository({
          id: String(repo.id),
          name: repo.name,
          fullname: repo.full_name,
          private: repo.private,
          description: repo.description,
          url: repo.html_url,
        })
    );
  }

  private buildParams(user: string, search?: string) {
    if (!search) return undefined;

    const query = `${search} in:name user:${user}`;
    return { q: query };
  }
}
