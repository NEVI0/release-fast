import { HorizontalDivider } from '@app/components/ui';
import { Cards, Construction, Header } from './_components';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <Cards />
      <HorizontalDivider />
      <Construction />
    </>
  );
}
