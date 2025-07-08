import { SessionProvider } from '@domain/entities';

import FetchUserRepositoriesUseCase from '@domain/useCases/FetchUserRepositoriesUseCase';
import makeUserRepoRepository from '@factories/repositories/makeUserRepoRepository';

interface Params {
  provider: SessionProvider;
  token: string;
}

let instance: FetchUserRepositoriesUseCase | null = null;

export default function makeFetchUserRepositoriesUseCase({
  provider,
  token,
}: Params) {
  if (!instance) {
    const userRepoRepository = makeUserRepoRepository({ provider, token });
    instance = new FetchUserRepositoriesUseCase(userRepoRepository);
  }

  return instance;
}
