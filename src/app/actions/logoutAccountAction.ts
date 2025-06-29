'use server';

import { signOut, auth } from '@configs/auth';

export default async function logoutAccountAction() {
  const session = await auth();
  if (!session) return;

  return await signOut({ redirectTo: '/' });
}
