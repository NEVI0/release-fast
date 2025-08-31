'use client';

import { useTranslations } from 'next-intl';
import { Github, Gitlab } from 'lucide-react';

import { SessionProvider } from '@domain/entities';

import { accessAccountAction } from '@app/actions';
import { concatClasses } from '@app/helpers';

interface ProviderCardProps {
  provider: SessionProvider;
}

const ICON_BY_PROVIDER: Record<SessionProvider, any> = {
  github: Github,
  gitlab: Gitlab,
};

const TITLE_BY_PROVIDER: Record<SessionProvider, string> = {
  github: 'GitHub',
  gitlab: 'GitLab',
};

export default function ProviderCard({ provider }: ProviderCardProps) {
  const t = useTranslations('page.access.card');

  const Icon = ICON_BY_PROVIDER[provider];

  return (
    <button
      className="cursor-pointer flex flex-col items-center justify-center gap-8 w-full md:w-auto h-[252px] md:h-[272px] bg-container border border-border rounded-3xl p-8 hover:shadow-xl transition-shadow"
      onClick={() => accessAccountAction(provider)}
    >
      <Icon
        className={concatClasses(
          'size-12',
          provider === 'gitlab' ? 'text-[#E24329]' : 'text-[#010409]'
        )}
      />

      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-2xl">
          {t('title', {
            provider: TITLE_BY_PROVIDER[provider],
          })}
        </h3>

        <p className="text-text-secondary">
          {t('description', {
            provider: TITLE_BY_PROVIDER[provider],
          })}
        </p>
      </div>
    </button>
  );
}
