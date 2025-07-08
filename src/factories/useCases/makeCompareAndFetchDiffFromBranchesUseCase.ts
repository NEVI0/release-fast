import { SessionProvider } from '@domain/entities';

import CompareAndFetchDiffFromBranchesUseCase from '@domain/useCases/CompareAndFetchDiffFromBranchesUseCase';
import makeRepoBranchRepository from '@factories/repositories/makeRepoBranchRepository';

interface Params {
  provider: SessionProvider;
  token?: string;
}

let instance: CompareAndFetchDiffFromBranchesUseCase | null = null;

export default function makeCompareAndFetchDiffFromBranchesUseCase({
  provider,
  token,
}: Params) {
  if (!instance) {
    const repoBranchRepository = makeRepoBranchRepository({ provider, token });
    instance = new CompareAndFetchDiffFromBranchesUseCase(repoBranchRepository);
  }

  return instance;
}
