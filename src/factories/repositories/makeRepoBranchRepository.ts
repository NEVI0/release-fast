import { SessionProvider } from '@domain/entities';
import { HttpProviderAbstract } from '@domain/providers';
import { RepoBranchRepositoryAbstract } from '@domain/repositories';

import GithubRepoBranchRepository from '@infra/repositories/GithubRepoBranchRepository';
import GitlabRepoBranchRepository from '@infra/repositories/GitlabRepoBranchRepository';

import makeHttpProvider from '@factories/providers/makeHttpProvider';

interface Params {
  provider: SessionProvider;
  token?: string;
}

let instance: RepoBranchRepositoryAbstract | null = null;

const INSTANCES: Record<
  SessionProvider,
  (httpProvider: HttpProviderAbstract) => RepoBranchRepositoryAbstract
> = {
  github: (httpProvider) => new GithubRepoBranchRepository(httpProvider),
  gitlab: (httpProvider) => new GitlabRepoBranchRepository(httpProvider),
};

export default function makeRepoBranchRepository({ provider, token }: Params) {
  if (!instance) {
    const httpProvider = makeHttpProvider({ provider, token });
    instance = INSTANCES[provider](httpProvider);
  }

  return instance;
}
