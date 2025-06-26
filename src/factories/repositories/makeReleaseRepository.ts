import 'server-only';

import { PrismaReleaseRepository } from '@infra/repositories';

let instance: PrismaReleaseRepository;

export default function makeReleaseRepository() {
  if (!instance) {
    instance = new PrismaReleaseRepository();
  }

  return instance;
}
