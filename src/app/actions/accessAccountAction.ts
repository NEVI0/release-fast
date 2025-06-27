'use server';

import { signIn, signOut, auth } from '@configs/auth';

type Provider = 'google' | 'github' | 'gitlab';

export default async function accessAccountAction(provider: Provider) {
  const session = await auth();

  if (!session) {
    return await signIn(provider, { redirectTo: '/dash' });
  }

  return await signOut({ redirectTo: '/' });
}
