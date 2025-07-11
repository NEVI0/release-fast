'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Share2Icon } from 'lucide-react';

import { ReleaseAbstract } from '@domain/entities';
import { useToast } from '@app/hooks';
import { formatDate } from '@app/helpers';
import { LOGO_DIMENSIONS } from '@app/constants/logo-dimensions';

import { HorizontalDivider, IconButton } from '@app/components/ui';

interface ContentProps {
  release: ReleaseAbstract;
}

export default function Content({ release }: ContentProps) {
  const toast = useToast();

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('Link da página copiado!');
    } catch (error) {
      toast.error('Não foi possível copiar o link da página!');
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-8">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl">{release.title}</h1>
          <h2 className="font-semibold text-2xl text-text-secondary">
            {release.version}
          </h2>
        </div>

        <IconButton icon={Share2Icon} onClick={handleCopyLink} />
      </header>

      <HorizontalDivider />

      <div className="flex-1 flex flex-col gap-8">
        <section className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Breve descrição</h3>

          {release.shortDescription.split('\n').map((line, index) => (
            <p key={index} className="w-full">
              {line}
            </p>
          ))}
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Descrição completa</h3>

          {release.fullDescription.split('\n').map((line, index) => (
            <p key={index} className="w-full">
              {line}
            </p>
          ))}
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Disponibilizado em</h3>
          <p className="w-full">
            {formatDate(release.availableAt, 'DD of MMMM of YYYY')}
          </p>
        </section>
      </div>

      <HorizontalDivider />

      <footer className="flex flex-col gap-4 items-start md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <small className="text-sm text-text-secondary">
            <strong className="font-semibold">Criado em:</strong>{' '}
            {formatDate(release.createdAt, 'DD of MMMM of YYYY')}
          </small>

          <small className="text-sm text-text-secondary">
            <strong className="font-semibold">Última atualização em:</strong>{' '}
            {formatDate(release.updatedAt, 'DD of MMMM of YYYY')}
          </small>
        </div>

        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-full flex flex-col md:items-end"
        >
          <small className="text-text-secondary">Powed by</small>

          <Image
            src="/images/logo-dark.png"
            alt="Release Fast Logo"
            width={LOGO_DIMENSIONS['small'].width}
            height={LOGO_DIMENSIONS['small'].height}
          />
        </Link>
      </footer>
    </div>
  );
}
