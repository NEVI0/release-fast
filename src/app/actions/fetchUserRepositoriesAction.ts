'use server';

import z from 'zod';

import { SessionProvider } from '@domain/entities';
import { FetchUserRepositoriesDTO } from '@domain/dtos';
import { makeFetchUserRepositoriesUseCase } from '@factories/useCases';

const schema = z.object({
  token: z.string().min(1, 'Access token is required'),
});

export default async function fetchUserRepositoriesAction(
  provider: SessionProvider,
  params: FetchUserRepositoriesDTO
) {
  try {
    const dto = schema.parse(params);
    const repositories = await makeFetchUserRepositoriesUseCase({
      provider,
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
    return {
      repositories: [],
    };
  }
}
