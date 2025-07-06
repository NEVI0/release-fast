import { SessionProvider } from './SessionProvider';

export default interface SessionAbstract {
  user: {
    name: string;
    username: string;
    email: string;
    image: string;
    id: string;
  };
  expires: string;
  token: string;
  provider: SessionProvider;
}
