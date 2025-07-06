import { SessionProvider } from '@domain/entities';

export const QUERIES = {
  repositories: (
    provider: SessionProvider,
    token: string,
    user: string,
    search: string | undefined
  ) => ['repositories', provider, token, user, search] as const,
};
