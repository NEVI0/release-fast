import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { ExternalLink, Plus } from 'lucide-react';

import { ReleaseAbstract } from '@domain/entities';

import { formatDate } from '@app/helpers';
import { Button, IconButton, Table } from '@app/components/ui';
import MobileRelease from '../MobileRelease';

interface DataProps {
  id: string;
  releases: ReleaseAbstract[];
}

export default function Data({ id, releases }: DataProps) {
  const t = useTranslations('page.project');
  const locale = useLocale();

  const columns = [
    { id: 'title', children: t('list.column.one') },
    { id: 'version', children: t('list.column.two') },
    { id: 'createdAt', children: t('list.column.three') },
    { id: 'updatedAt', children: t('list.column.four') },
    { id: 'details', children: t('list.column.five'), center: true },
  ];

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{t('list.title')}</h3>

          <h4 className="text-text-secondary">
            {t.rich('list.subtitle', {
              total: releases.length,
              strong: (chunk) => (
                <strong className="font-semibold">{chunk}</strong>
              ),
            })}
          </h4>
        </div>

        <Link href={`/dash/projects/${id}/create-release`}>
          <Button>
            {t('action.create')}
            <Button.Icon icon={Plus} />
          </Button>
        </Link>
      </div>

      <div className="hidden md:block">
        <Table>
          <Table.Head columns={columns} />

          <Table.Body>
            {releases.map((release, index) => {
              const isLast = index === releases.length - 1;

              return (
                <Table.Row key={release.id} isLast={isLast}>
                  <Table.Data>{release.title}</Table.Data>
                  <Table.Data>{release.version}</Table.Data>
                  <Table.Data>
                    {formatDate(release.createdAt, locale)}
                  </Table.Data>
                  <Table.Data>
                    {formatDate(release.updatedAt, locale)}
                  </Table.Data>

                  <Table.Data>
                    <div className="flex items-center justify-center">
                      <Link
                        href={`/public/release/${release.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconButton icon={ExternalLink} />
                      </Link>
                    </div>
                  </Table.Data>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>

      <div className="block md:hidden">
        <ul className="flex flex-col gap-4">
          {releases.map((release) => (
            <li key={release.id}>
              <MobileRelease release={release} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
