import type { SessionProvider } from '@domain/entities';

import FetchHttpProvider from '@infra/providers/FetchHttpProvider';

type Provider = 'app' | SessionProvider;

interface Params {
  provider: Provider;
  token?: string;
}

const BASE_URL_BY_PROVIDER: Record<Provider, string> = {
  app: '',
  github: 'https://api.github.com',
  gitlab: '',
};

export default function makeHttpProvider(params?: Params) {
  const baseUrl = BASE_URL_BY_PROVIDER[params?.provider || 'app'];

  let headers = {};
  if (params?.token) {
    headers = {
      Authorization: `Bearer ${params.token}`,
    };
  }

  return new FetchHttpProvider(baseUrl, headers);
}
