import { useQuery } from '@tanstack/react-query';

import makeFetchUserRepositoriesUseCase from '@factories/useCases/makeFetchUserRepositoriesUseCase';

import { SessionProvider } from '@domain/entities';
import { QUERIES } from '@app/constants/queries';

interface Params {
  provider: SessionProvider;
  token: string;
  user: string;
  search?: string;
}

export default function useFetchRepositories({
  provider,
  token,
  user,
  search,
}: Params) {
  const { isPending, data } = useQuery({
    queryKey: QUERIES.repositories(provider, token, user, search),
    queryFn: async () => {
      return await makeFetchUserRepositoriesUseCase({
        provider,
        token,
      }).execute({
        user,
        search,
      });
    },
  });

  return {
    isLoading: isPending,
    repositories: data || [],
  };
}
