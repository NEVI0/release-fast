import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    plan?: string;
    isFreeTrial?: boolean;
    createdAt?: Date | string;
  }
}
