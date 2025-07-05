import { SessionProvider } from '@domain/entities';
import { FetchUserRepositoriesUseCase } from '@domain/useCases';
import { makeUserRepoRepository } from '@factories/repositories';

interface Params {
  provider: SessionProvider;
}

let instance: FetchUserRepositoriesUseCase | null = null;

export default function makeFetchUserRepositoriesUseCase({ provider }: Params) {
  if (!instance) {
    const userRepoRepository = makeUserRepoRepository({ provider });
    instance = new FetchUserRepositoriesUseCase(userRepoRepository);
  }

  return instance;
}
