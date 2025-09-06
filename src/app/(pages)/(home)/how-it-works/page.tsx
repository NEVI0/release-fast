import { useTranslations } from 'next-intl';

import { Breadcrumb } from '@app/components/ui';
import { Video } from './_components';

export default function HowItWorksPage() {
  const compT = useTranslations('component.breadcrumb');

  return (
    <>
      <Breadcrumb
        items={[
          { label: compT('home'), href: '/' },
          { label: compT('howItWorks'), href: '/how-it-works' },
        ]}
      />

      <Video />
    </>
  );
}
