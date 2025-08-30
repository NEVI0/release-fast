'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';

import { Locale } from '@domain/entities';
import { COOKIE_LOCALE_KEY } from '@domain/constants/locales';

import { Dropdown } from '@app/components/ui';

interface State {
  text: string;
  image: {
    src: string;
    alt: string;
  };
}

const STATE_BY_LOCALE: Record<Locale, State> = {
  en: {
    text: 'EN',
    image: {
      src: '/icons/usa.png',
      alt: 'English - USA',
    },
  },
  pt: {
    text: 'PT',
    image: {
      src: '/icons/brazil.png',
      alt: 'Português - Brazil',
    },
  },
};

export default function LanguageSwitcher() {
  const locale = useLocale();

  const { text, image } = STATE_BY_LOCALE[locale as Locale];

  async function handleChangeLocale(selectedLocale: Locale) {
    document.cookie = `${COOKIE_LOCALE_KEY}=${selectedLocale}`;
    window.location.reload();
  }

  return (
    <Dropdown
      value={locale}
      setValue={handleChangeLocale}
      options={[
        {
          label: 'English',
          value: 'en' as Locale,
          image: {
            src: '/icons/usa.png',
            alt: 'English - USA',
          },
        },
        {
          label: 'Português',
          value: 'pt' as Locale,
          image: {
            src: '/icons/brazil.png',
            alt: 'English - USA',
          },
        },
      ]}
    >
      <div className="flex items-center justify-center gap-2 cursor-pointer">
        <Image src={image.src} alt={image.alt} width={24} height={24} />
        <span className="text-text-primary">{text}</span>
      </div>
    </Dropdown>
  );
}
