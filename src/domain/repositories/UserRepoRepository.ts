import { RepositoryAbstract } from '@domain/entities';

export default interface UserRepoRepositoryAbstract {
  findAll(
    token: string,
    user: string,
    search?: string
  ): Promise<RepositoryAbstract[]>;
}
