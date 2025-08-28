'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Dropdown } from '@app/components/ui';

type Locale = 'en' | 'pt' | string;

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
  const [selectedLanguage, setSelectedLanguage] = useState<Locale>('en');

  const { text, image } = STATE_BY_LOCALE[selectedLanguage];

  return (
    <Dropdown
      value={selectedLanguage}
      setValue={setSelectedLanguage}
      options={[
        {
          label: 'English',
          value: 'en',
          image: {
            src: '/icons/usa.png',
            alt: 'English - USA',
          },
        },
        {
          label: 'Português',
          value: 'pt',
          image: {
            src: '/icons/brazil.png',
            alt: 'English - USA',
          },
        },
      ]}
    >
      <button
        type="button"
        data-popover-target="menu"
        data-popover-nested="true"
        className="flex items-center justify-center gap-2 cursor-pointer"
      >
        <Image src={image.src} alt={image.alt} width={24} height={24} />
        <span className="text-text-primary">{text}</span>
      </button>
    </Dropdown>
  );
}
