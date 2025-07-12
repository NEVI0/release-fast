'use server';

import { z } from 'zod';

import { SessionProvider } from '@domain/entities';
import { FetchUserRepositoriesDTO } from '@domain/dtos';

import makeFetchUserRepositoriesUseCase from '@factories/useCases/makeFetchUserRepositoriesUseCase';

const schema = z.object({
  user: z.string().min(1, 'User id required'),
  search: z.string().optional(),
});

export default async function fetchUserRepositoriesAction(
  params: FetchUserRepositoriesDTO,
  provider: SessionProvider,
  token: string
) {
  try {
    const dto = schema.parse(params);
    const repositories = await makeFetchUserRepositoriesUseCase({
      provider,
      token,
    }).execute(dto);

    return {
      repositories: repositories.map((repo) => ({
        id: repo.id,
        name: repo.name,
        private: repo.private,
        description: repo.description,
        url: repo.url,
      })),
    };
  } catch (error) {
    return { repositories: [] };
  }
}
