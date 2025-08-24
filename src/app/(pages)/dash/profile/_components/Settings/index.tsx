'use client';

import { useState } from 'react';
import { DollarSign, Edit3, Trash2, TriangleAlert } from 'lucide-react';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { UserAbstract } from '@domain/entities';

import { Setting, ThemeToggle } from '@app/components/common';
import { Button } from '@app/components/ui';

import { DeleteAccountModal } from './components';

interface SettingsProps {
  user: UserAbstract;
}

export default function Settings({ user }: SettingsProps) {
  const t = useTranslations('page.account.setting');

  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] =
    useState(false);

  return (
    <>
      <section className="flex flex-col gap-8">
        <h3 className="font-bold text-2xl">{t('title')}</h3>

        <ul className="flex flex-col gap-4">
          <li>
            <Setting title={t('one.title')} description={t('one.description')}>
              <ThemeToggle />
            </Setting>
          </li>

          <li>
            <Setting title={t('two.title')} description={t('two.description')}>
              <Link href="/dash/profile/edit" className="w-full">
                <Button className="w-full">
                  {t('two.action')} <Button.Icon icon={Edit3} />
                </Button>
              </Link>
            </Setting>
          </li>

          <li>
            <Setting
              title={t('three.title')}
              description={t('three.description')}
            >
              <Link href="/dash/profile/plans" className="w-full">
                <Button className="w-full">
                  {t('three.action')} <Button.Icon icon={DollarSign} />
                </Button>
              </Link>
            </Setting>
          </li>

          <li>
            <Setting
              title={t('four.title')}
              description={t('four.description')}
            >
              <Link href="/dash/profile/support" className="w-full">
                <Button className="w-full">
                  {t('four.action')} <Button.Icon icon={TriangleAlert} />
                </Button>
              </Link>
            </Setting>
          </li>

          <li>
            <Setting
              title={t('five.title')}
              description={t('five.description')}
            >
              <Button
                variant="danger"
                className="w-full"
                onClick={() => setIsDeleteAccountModalOpen(true)}
              >
                {t('five.action')} <Button.Icon icon={Trash2} />
              </Button>
            </Setting>
          </li>
        </ul>
      </section>

      <DeleteAccountModal
        user={user}
        isOpen={isDeleteAccountModalOpen}
        onClose={() => setIsDeleteAccountModalOpen(false)}
      />
    </>
  );
}
