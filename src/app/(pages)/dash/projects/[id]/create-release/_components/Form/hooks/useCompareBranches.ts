import { useMutation } from '@tanstack/react-query';

import makeCompareAndFetchDiffFromBranchesUseCase from '@factories/useCases/makeCompareAndFetchDiffFromBranchesUseCase';

import { SessionProvider } from '@domain/entities';

interface Init {
  provider: SessionProvider;
  token: string;
}

interface Params {
  repository: string;
  baseBranch: string;
  headBranch: string;
}

export default function useCompareBranches({ provider, token }: Init) {
  const mutation = useMutation({
    mutationFn: async ({ repository, baseBranch, headBranch }: Params) => {
      return await makeCompareAndFetchDiffFromBranchesUseCase({
        provider,
        token,
      }).execute({
        repository,
        baseBranch,
        headBranch,
      });
    },
  });

  return {
    compare: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
}
