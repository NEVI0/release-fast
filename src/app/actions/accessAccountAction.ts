'use server';

import { signIn, auth } from '@configs/auth';

type Provider = 'google' | 'github' | 'gitlab';

export default async function accessAccountAction(provider?: Provider) {
  const session = await auth();
  if (session) return;

  return await signIn(provider || 'google', { redirectTo: '/dash' });
}
