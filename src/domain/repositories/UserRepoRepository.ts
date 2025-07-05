import { RepositoryAbstract } from '@domain/entities';

export default interface UserRepoRepositoryAbstract {
  findAll(token: string, search?: string): Promise<RepositoryAbstract[]>;
}
