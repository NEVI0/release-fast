import NextAuth from 'next-auth';

// import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import Gitlab from 'next-auth/providers/gitlab';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './prisma';

const {
  AUTH_SECRET,
  AUTH_GOOGLE_CLIENT_ID,
  AUTH_GOOGLE_CLIENT_SECRET,
  AUTH_GITHUB_CLIENT_ID,
  AUTH_GITHUB_CLIENT_SECRET,
  AUTH_GITLAB_CLIENT_ID,
  AUTH_GITLAB_CLIENT_SECRET,
} = process.env;

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
  },
  providers: [
    // Credentials({
    //   credentials: {
    //     email: { label: 'Email', type: 'email' },
    //     password: { label: 'Password', type: 'password' },
    //   },
    // }),
    Google({
      clientId: AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: AUTH_GOOGLE_CLIENT_SECRET!,
    }),
    Github({
      clientId: AUTH_GITHUB_CLIENT_ID!,
      clientSecret: AUTH_GITHUB_CLIENT_SECRET!,
    }),
    Gitlab({
      clientId: AUTH_GITLAB_CLIENT_ID!,
      clientSecret: AUTH_GITLAB_CLIENT_SECRET!,
    }),
  ],
});
