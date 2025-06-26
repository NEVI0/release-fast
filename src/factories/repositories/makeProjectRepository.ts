import 'server-only';

import { PrismaProjectRepository } from '@infra/repositories';

let instance: PrismaProjectRepository;

export default function makeProjectRepository() {
  if (!instance) {
    instance = new PrismaProjectRepository();
  }

  return instance;
}
