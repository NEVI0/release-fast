import { useTranslations } from 'next-intl';

import { Video as CommonVideo } from '@app/components/common';

export default function Video() {
  const t = useTranslations('page.home.howItWorks');

  return (
    <section className="flex flex-col items-center gap-8">
      <CommonVideo />

      <p className="text-text-secondary text-center w-[90%]">
        {t.rich('description', {
          strong: (chunk) => <strong className="font-semibold">{chunk}</strong>,
        })}
      </p>
    </section>
  );
}
