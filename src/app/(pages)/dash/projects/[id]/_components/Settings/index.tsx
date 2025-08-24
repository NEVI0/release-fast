'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Edit3, Trash2 } from 'lucide-react';

import { ProjectAbstract } from '@domain/entities';

import { Setting } from '@app/components/common';
import { Button } from '@app/components/ui';

import { DeleteProjectModal } from './components';

interface SettingsProps {
  project: ProjectAbstract;
}

export default function Settings({ project }: SettingsProps) {
  const t = useTranslations('page.project.setting');

  const [isDeleteProjectModalOpen, setIsDeleteProjectModalOpen] =
    useState(false);

  return (
    <>
      <section className="flex flex-col gap-8">
        <h3 className="font-bold text-2xl">{t('title')}</h3>

        <ul className="flex flex-col gap-4">
          <li>
            <Setting title={t('one.title')} description={t('one.description')}>
              <Link
                href={`/dash/projects/${project.id}/edit`}
                className="w-full"
              >
                <Button className="w-full">
                  {t('one.action')} <Button.Icon icon={Edit3} />
                </Button>
              </Link>
            </Setting>
          </li>

          <li>
            <Setting title={t('two.title')} description={t('two.description')}>
              <Button
                variant="danger"
                className="w-full"
                onClick={() => setIsDeleteProjectModalOpen(true)}
              >
                {t('two.action')} <Button.Icon icon={Trash2} />
              </Button>
            </Setting>
          </li>
        </ul>
      </section>

      <DeleteProjectModal
        project={project}
        isOpen={isDeleteProjectModalOpen}
        onClose={() => setIsDeleteProjectModalOpen(false)}
      />
    </>
  );
}
