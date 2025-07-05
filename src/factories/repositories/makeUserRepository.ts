import 'server-only';

import { UserRepositoryAbstract } from '@domain/repositories';
import PrismaUserRepository from '@infra/repositories/PrismaUserRepository';

let instance: UserRepositoryAbstract | null = null;

export default function makeUserRepository() {
  if (!instance) {
    instance = new PrismaUserRepository();
  }

  return instance;
}
