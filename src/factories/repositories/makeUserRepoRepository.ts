import { UserRepoRepositoryAbstract } from '@domain/repositories';
import { SessionProvider } from '@domain/entities';

import GithubUserRepoRepository from '@infra/repositories/GithubUserRepoRepository';
import makeHttpProvider from '@factories/providers/makeHttpProvider';

interface Params {
  provider: SessionProvider;
  token?: string;
}

let instance: UserRepoRepositoryAbstract | null = null;

export default function makeUserRepoRepository({ provider, token }: Params) {
  if (!instance) {
    const httpProvider = makeHttpProvider({ provider, token });
    instance = new GithubUserRepoRepository(httpProvider);
  }

  return instance;
}
