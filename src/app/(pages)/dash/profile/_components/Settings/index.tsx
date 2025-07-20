'use client';

import { useState } from 'react';
import { DollarSign, Edit3, Trash2, TriangleAlert } from 'lucide-react';

import { UserAbstract } from '@domain/entities';

import { Setting, ThemeToggle } from '@app/components/common';
import { Button } from '@app/components/ui';

import { DeleteAccountModal } from './components';
import Link from 'next/link';

interface SettingsProps {
  user: UserAbstract;
}

export default function Settings({ user }: SettingsProps) {
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] =
    useState(false);

  return (
    <>
      <section className="flex flex-col gap-8">
        <h3 className="font-bold text-2xl">Settings</h3>

        <ul className="flex flex-col gap-4">
          <li>
            <Setting
              title="Change theme"
              description="Switch between light and dark theme"
            >
              <ThemeToggle />
            </Setting>
          </li>

          <li>
            <Setting
              title="Edit my account"
              description="Edit your account details (name, email, etc.)"
            >
              <Link href="/dash/profile/edit" className="w-full">
                <Button className="w-full">
                  Edit account <Button.Icon icon={Edit3} />
                </Button>
              </Link>
            </Setting>
          </li>

          <li>
            <Setting
              title="Plans and subscriptions"
              description="Manage your plans and subscriptions"
            >
              <Link href="/dash/profile/plans" className="w-full">
                <Button className="w-full">
                  Manage plans <Button.Icon icon={DollarSign} />
                </Button>
              </Link>
            </Setting>
          </li>

          <li>
            <Setting
              title="Report problem"
              description="Create a support ticket of problems or bugs"
            >
              <Link href="/dash/profile/support" className="w-full">
                <Button className="w-full">
                  Report problem <Button.Icon icon={TriangleAlert} />
                </Button>
              </Link>
            </Setting>
          </li>

          <li>
            <Setting
              title="Delete account"
              description="Delete your account and all your data (this action is irreversible)"
            >
              <Button
                variant="danger"
                className="w-full"
                onClick={() => setIsDeleteAccountModalOpen(true)}
              >
                Delete account <Button.Icon icon={Trash2} />
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
