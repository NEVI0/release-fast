import NextAuth from 'next-auth';

import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import Gitlab from 'next-auth/providers/gitlab';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './prisma';

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITLAB_CLIENT_ID,
  GITLAB_CLIENT_SECRET,
} = process.env;

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
    }),
    Google({
      clientId: GOOGLE_CLIENT_ID!,
      clientSecret: GOOGLE_CLIENT_SECRET!,
    }),
    Github({
      clientId: GITHUB_CLIENT_ID!,
      clientSecret: GITHUB_CLIENT_SECRET!,
    }),
    Gitlab({
      clientId: GITLAB_CLIENT_ID!,
      clientSecret: GITLAB_CLIENT_SECRET!,
    }),
  ],
});
