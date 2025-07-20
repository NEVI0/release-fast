'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { UserAbstract } from '@domain/entities';

import { wait } from '@app/helpers';
import { useToast } from '@app/hooks';
import { deleteUserByIdAction, logoutAccountAction } from '@app/actions';

import { Button, IconButton, Input, Modal } from '@app/components/ui';

interface DeleteAccountModalProps {
  user: UserAbstract;

  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteAccountModal({
  user,
  isOpen,
  onClose,
}: DeleteAccountModalProps) {
  const toast = useToast();
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteAccount(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      setIsLoading(false);

      await deleteUserByIdAction({ id: user.id });
      toast.success(
        'Your account has been successfully deleted! You will be redirected in 3 seconds...'
      );

      await wait(3000);
      logoutAccountAction();
      router.replace('/');
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Error deleting account'
      );

      setPassword('');
    } finally {
      setIsLoading(false);
    }
  }

  const hasActivePlan = user.plan !== 'free';
  const isDeleteButtonDisabled = password !== 'Delete';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="items-end md:items-center md:justify-center"
    >
      <div className="flex flex-col items-center gap-8 bg-container border border-border p-8 rounded-t-4xl md:rounded-b-4xl w-full md:w-[500px]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-2xl font-bold text-text-primary">
              Delete account
            </h3>

            <IconButton icon={X} onClick={onClose} />
          </div>

          {hasActivePlan ? (
            <>
              <p className="text-text-secondary">
                Before deleting your account and it's data, first you need to
                cancel your subscription. To do that, go to:{' '}
              </p>

              <strong className="text-text-secondary font-semibold">
                My account &gt; Settings &gt; Manage Plans &gt; "Cancel at any
                time" button;
              </strong>
            </>
          ) : (
            <>
              <p className="text-text-secondary">
                Are you sure you want to delete your account? All data will be
                deleted and this action cannot be undone.
              </p>

              <p className="text-text-secondary">
                If so, type "Delete" in the field below.
              </p>
            </>
          )}
        </div>

        <form
          className="flex flex-col md:flex-row items-end gap-4 w-full"
          onSubmit={handleDeleteAccount}
        >
          <Input
            id="delete-account"
            placeholder={`Type "Delete" to confirm`}
            className="w-full"
            required
            value={password}
            disabled={hasActivePlan}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button
            type="submit"
            variant="danger"
            className="w-full"
            disabled={hasActivePlan || isDeleteButtonDisabled || isLoading}
          >
            {isLoading ? 'Deleting...' : 'Delete account'}
          </Button>
        </form>
      </div>
    </Modal>
  );
}
