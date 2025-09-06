import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function DeveloperCard() {
  const t = useTranslations('component.footer.creator');

  return (
    <div className="flex flex-col items-center md:flex-row gap-4">
      <Image
        src="/images/nevio.png"
        alt="Névio Costa Magagnin"
        width={64}
        height={64}
        className="rounded-full"
      />

      <div className="flex flex-col">
        <p className="text-center md:text-left">{t('name')}</p>

        <small className="text-center text-sm md:text-left text-text-secondary">
          {t('description')}
        </small>
      </div>
    </div>
  );
}
