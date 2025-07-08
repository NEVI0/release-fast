import { SessionProvider } from '@domain/entities';
import { RepoBranchRepositoryAbstract } from '@domain/repositories';

import GithubRepoBranchRepository from '@infra/repositories/GithubRepoBranchRepository';
import makeHttpProvider from '@factories/providers/makeHttpProvider';

interface Params {
  provider: SessionProvider;
  token?: string;
}

let instance: RepoBranchRepositoryAbstract | null = null;

export default function makeRepoBranchRepository({ provider, token }: Params) {
  if (!instance) {
    const httpProvider = makeHttpProvider({ provider, token });
    instance = new GithubRepoBranchRepository(httpProvider);
  }

  return instance;
}
