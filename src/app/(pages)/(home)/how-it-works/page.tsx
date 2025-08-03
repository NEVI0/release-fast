import { Breadcrumb } from '@app/components/ui';
import { Video } from './_components';

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'How It Works', href: '/how-it-works' },
        ]}
      />

      <Video />
    </>
  );
}
