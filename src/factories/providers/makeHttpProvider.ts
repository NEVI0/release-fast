import type { HttpProviderAbstract } from '@domain/providers';
import { FetchHttpProvider } from '@infra/providers';

let instance: HttpProviderAbstract | null = null;

export default function makeHttpProvider() {
  if (!instance) {
    const baseUrl = '';
    instance = new FetchHttpProvider(baseUrl);
  }

  return instance;
}
