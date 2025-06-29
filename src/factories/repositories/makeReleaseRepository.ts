import 'server-only';

import { ReleaseRepositoryAbstract } from '@domain/repositories';
import { PrismaReleaseRepository } from '@infra/repositories';

let instance: ReleaseRepositoryAbstract | null = null;

export default function makeReleaseRepository() {
  if (!instance) {
    instance = new PrismaReleaseRepository();
  }

  return instance;
}
