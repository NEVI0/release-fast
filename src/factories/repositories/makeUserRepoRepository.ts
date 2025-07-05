import { UserRepoRepositoryAbstract } from '@domain/repositories';
import { UserRepoRepository } from '@infra/repositories';
import { makeHttpProvider } from '@factories/providers';
import { SessionProvider } from '@domain/entities';

interface Params {
  provider: SessionProvider;
}

let instance: UserRepoRepositoryAbstract | null = null;

export default function makeUserRepoRepository({ provider }: Params) {
  if (!instance) {
    const httpProvider = makeHttpProvider({ provider });
    instance = new UserRepoRepository(httpProvider);
  }

  return instance;
}
