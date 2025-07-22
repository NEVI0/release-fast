'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Share2Icon } from 'lucide-react';

import { ReleaseAbstract } from '@domain/entities';
import { useToast } from '@app/hooks';
import { formatDate } from '@app/helpers';
import { LOGO_DIMENSIONS } from '@app/constants/logo-dimensions';

import { HorizontalDivider, IconButton } from '@app/components/ui';
import { Markdown } from './components';

interface ContentProps {
  release: ReleaseAbstract;
}

export default function Content({ release }: ContentProps) {
  const toast = useToast();

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('Page link copied!');
    } catch (error) {
      toast.error('Could not copy the page link!');
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
          <h3 className="font-semibold text-lg">Short description</h3>

          {release.shortDescription.split('\n').map((line, index) => (
            <p key={index} className="w-full text-text-secondary">
              {line}
            </p>
          ))}
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Full description</h3>
          <Markdown text={release.fullDescription} />
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Released on</h3>
          <p className="w-full">
            {formatDate(release.availableAt, 'DD of MMMM of YYYY')}
          </p>
        </section>
      </div>

      <HorizontalDivider />

      <footer className="flex flex-col gap-4 items-start md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <small className="text-sm text-text-secondary">
            <strong className="font-semibold">Created on:</strong>{' '}
            {formatDate(release.createdAt, 'MMMM DD, YYYY')}
          </small>

          <small className="text-sm text-text-secondary">
            <strong className="font-semibold">Last updated on:</strong>{' '}
            {formatDate(release.updatedAt, 'MMMM DD, YYYY')}
          </small>
        </div>

        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-full flex flex-col md:items-end"
        >
          <small className="text-text-secondary">Powered by</small>

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
