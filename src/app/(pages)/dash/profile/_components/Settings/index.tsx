'use client';

import { useState } from 'react';
import { Edit3, ExternalLink, Lock, Trash2 } from 'lucide-react';

import { UserAbstract } from '@domain/entities';

import { Setting, ThemeToggle } from '@app/components/common';
import { Button } from '@app/components/ui';

import { DeleteAccountModal } from './components';

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
              <Button>
                Edit account <Button.Icon icon={Edit3} />
              </Button>
            </Setting>
          </li>

          <li id="plans-and-subscriptions">
            <Setting
              title="Plans and subscriptions"
              description="Manage your plans and subscriptions"
            >
              <Button>
                Manage plans <Button.Icon icon={ExternalLink} />
              </Button>
            </Setting>
          </li>

          <li>
            <Setting
              title="Delete account"
              description="Delete your account and all your data (this action is irreversible)"
            >
              <Button
                variant="danger"
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
