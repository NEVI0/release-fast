import { SessionProvider } from './SessionProvider';

export default interface SessionAbstract {
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    image: string;
    plan?: string;
    createdAt: Date | string;
  };
  expires: string;
  token: string;
  provider: SessionProvider;
}
