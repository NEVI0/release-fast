import type { SessionProvider } from '@domain/entities';
import type { HttpProviderAbstract } from '@domain/providers';
import { FetchHttpProvider } from '@infra/providers';

type Provider = 'app' | SessionProvider;

interface Params {
  provider: Provider;
}

let instance: HttpProviderAbstract | null = null;

const BASE_URL_BY_PROVIDER: Record<Provider, string> = {
  app: '',
  github: process.env.GITHUB_API_BASE_URL!,
  gitlab: process.env.GITLAB_API_BASE_URL!,
};

export default function makeHttpProvider(params?: Params) {
  if (!instance) {
    const baseUrl = BASE_URL_BY_PROVIDER[params?.provider || 'app'];
    instance = new FetchHttpProvider(baseUrl);
  }

  return instance;
}
