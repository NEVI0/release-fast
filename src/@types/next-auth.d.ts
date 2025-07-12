import NextAuth from 'next-auth';
import { PlanType } from '@domain/entities';

declare module 'next-auth' {
  interface User {
    plan?: PlanType;
    isFreeTrial?: boolean;
    createdAt?: Date | string;
  }
}
