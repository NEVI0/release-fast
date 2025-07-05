import { Repository } from '@domain/entities';
import { HttpProviderAbstract } from '@domain/providers';
import { UserRepoRepositoryAbstract } from '@domain/repositories';

export default class UserRepoRepository implements UserRepoRepositoryAbstract {
  constructor(private readonly httpProvider: HttpProviderAbstract) {}

  public async findAll(token: string, search?: string) {
    const repositories = await this.httpProvider.get<any[]>('/user/repos', {
      ...(!!search && {
        params: {
          sort: search,
        },
      }),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!repositories || !repositories.length) return [];

    return repositories.map(
      (repo) =>
        new Repository({
          id: repo.id,
          name: repo.name,
          private: repo.private,
          description: repo.description,
          url: repo.html_url,
        })
    );
  }
}
