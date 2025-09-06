import NextAuth from 'next-auth';

import Github from 'next-auth/providers/github';
import Gitlab from 'next-auth/providers/gitlab';

import { PlanType } from '@domain/entities';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './prisma';

const {
  AUTH_SECRET,
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
        const { sub, plan, createdAt, username } = token;

        session.user.id = sub as string;
        session.user.plan = plan as PlanType;
        session.user.createdAt = createdAt as string;
        (session.user as any).username = username;
      }

      return {
        ...session,
        token: token.accessToken,
        provider: token.provider,
      };
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.plan = user.plan;
        token.createdAt = user.createdAt;
      }
      if (account) {
        if (account.access_token) token.accessToken = account.access_token;
        if (account.provider) token.provider = account.provider;
        if (profile) token.username = profile.login;
      }

      return token;
    },
  },
  providers: [
    Github({
      clientId: AUTH_GITHUB_CLIENT_ID!,
      clientSecret: AUTH_GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'repo',
        },
      },
    }),
    Gitlab({
      clientId: AUTH_GITLAB_CLIENT_ID!,
      clientSecret: AUTH_GITLAB_CLIENT_SECRET!,
      authorization: {
        url: 'https://gitlab.com/oauth/authorize',
        params: {
          scope: 'api read_user',
        },
      },
    }),
  ],
});
