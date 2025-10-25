import { RepositoryAbstract } from '@domain/entities';
import { UserRepoRepositoryAbstract } from '@domain/repositories';

export default class FakeUserRepoRepository
  implements UserRepoRepositoryAbstract
{
  private repositories: RepositoryAbstract[] = [];

  public findAll: UserRepoRepositoryAbstract['findAll'] = async () => {
    return Promise.resolve(this.repositories);
  };

  public mockRepository(repository: RepositoryAbstract) {
    this.repositories.push(repository);
  }
}
