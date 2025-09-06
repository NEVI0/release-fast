import { SessionProvider } from '@domain/entities';
import { HttpProviderAbstract } from '@domain/providers';
import { UserRepoRepositoryAbstract } from '@domain/repositories';

import GithubUserRepoRepository from '@infra/repositories/GithubUserRepoRepository';
import GitlabUserRepoRepository from '@infra/repositories/GitlabUserRepoRepository';

import makeHttpProvider from '@factories/providers/makeHttpProvider';

interface Params {
  provider: SessionProvider;
  token?: string;
}

let instance: UserRepoRepositoryAbstract | null = null;

const INSTANCES: Record<
  SessionProvider,
  (httpProvider: HttpProviderAbstract) => UserRepoRepositoryAbstract
> = {
  github: (httpProvider) => new GithubUserRepoRepository(httpProvider),
  gitlab: (httpProvider) => new GitlabUserRepoRepository(httpProvider),
};

export default function makeUserRepoRepository({ provider, token }: Params) {
  if (!instance) {
    const httpProvider = makeHttpProvider({ provider, token });
    instance = INSTANCES[provider](httpProvider);
  }

  return instance;
}
