import { SessionProvider, UserAbstract } from '@domain/entities';

import { fetchDashboardKPIsAction } from '@app/actions';
import { Data } from './components';

interface CardsProps {
  user: UserAbstract & { provider: SessionProvider };
}

export default async function Cards({ user }: CardsProps) {
  const results = await fetchDashboardKPIsAction({ userId: user.id });
  return <Data provider={user.provider} results={results} />;
}
