'use server';

import { auth } from '@configs/auth';
import { SessionAbstract } from '@domain/entities';

export default async function fetchUserSession() {
  const session = await auth();

  if (!session || !session.user) return null;
  return session as SessionAbstract;
}
