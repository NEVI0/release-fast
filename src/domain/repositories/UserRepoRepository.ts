import { RepositoryAbstract } from '@domain/entities';

export default interface UserRepoRepositoryAbstract {
  findAll(user: string, search?: string): Promise<RepositoryAbstract[]>;
}
