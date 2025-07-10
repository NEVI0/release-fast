import Image from 'next/image';
import Link from 'next/link';

import { concatClasses } from '@app/helpers';
import { HorizontalDivider, Skeleton } from '@app/components/ui';

const SHORT_DESCRIPTION_LENGTH = 3;
const FULL_DESCRIPTION_LENGTH = 8;

export default function LoadingContent() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[248px] h-[44px] rounded-2xl" />
          <Skeleton className="w-[148px] h-[38px] rounded-2xl" />
        </div>
      </header>

      <HorizontalDivider />

      <div className="flex-1 flex flex-col gap-8">
        <section className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Breve descrição</h3>

          {new Array(SHORT_DESCRIPTION_LENGTH).fill(0).map((_, index) => {
            const isLast = index + 1 === SHORT_DESCRIPTION_LENGTH;

            return (
              <Skeleton
                key={index}
                className={concatClasses(
                  'h-[24px]',
                  isLast ? 'w-[428px]' : 'w-full'
                )}
              />
            );
          })}
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Descrição completa</h3>

          {new Array(FULL_DESCRIPTION_LENGTH).fill(0).map((_, index) => {
            const isLast = index + 1 === FULL_DESCRIPTION_LENGTH;

            return (
              <Skeleton
                key={index}
                className={concatClasses(
                  'h-[24px]',
                  isLast ? 'w-[428px]' : 'w-full'
                )}
              />
            );
          })}
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Disponibilizado em</h3>
          <Skeleton className="w-[224px] h-[24px]" />
        </section>
      </div>

      <HorizontalDivider />

      <footer className="flex flex-col gap-4 items-start md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <small className="text-sm text-text-secondary flex items-center gap-2">
            <strong className="font-semibold">Criado em:</strong>{' '}
            <Skeleton className="w-[124px] h-[16px] rounded-sm" />
          </small>

          <small className="text-sm text-text-secondary flex items-center gap-2">
            <strong className="font-semibold">Última atualização em:</strong>{' '}
            <Skeleton className="w-[124px] h-[16px] rounded-sm" />
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
            width={120}
            height={24}
          />
        </Link>
      </footer>
    </div>
  );
}
