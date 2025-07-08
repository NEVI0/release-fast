import type { SessionProvider } from '@domain/entities';
import type { HttpProviderAbstract } from '@domain/providers';

import FetchHttpProvider from '@infra/providers/FetchHttpProvider';

type Provider = 'app' | SessionProvider;

interface Params {
  provider: Provider;
  token?: string;
}

let instance: HttpProviderAbstract | null = null;

const BASE_URL_BY_PROVIDER: Record<Provider, string> = {
  app: '',
  github: 'https://api.github.com',
  gitlab: '',
};

export default function makeHttpProvider(params?: Params) {
  if (!instance) {
    const baseUrl = BASE_URL_BY_PROVIDER[params?.provider || 'app'];

    let headers = {};
    if (params?.token) {
      headers = {
        Authorization: `Bearer ${params.token}`,
      };
    }

    instance = new FetchHttpProvider(baseUrl, headers);
  }

  return instance;
}
