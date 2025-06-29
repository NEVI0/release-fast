import 'server-only';

import { ProjectRepositoryAbstract } from '@domain/repositories';
import { PrismaProjectRepository } from '@infra/repositories';

let instance: ProjectRepositoryAbstract | null = null;

export default function makeProjectRepository() {
  if (!instance) {
    instance = new PrismaProjectRepository();
  }

  return instance;
}
