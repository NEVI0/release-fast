import { UserRepoRepositoryAbstract } from '@domain/repositories';
import { SessionProvider } from '@domain/entities';

import UserRepoRepository from '@infra/repositories/UserRepoRepository';
import makeHttpProvider from '@factories/providers/makeHttpProvider';

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
