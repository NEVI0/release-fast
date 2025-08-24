'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('page.account.delete');

  const toast = useToast();
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteAccount(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      setIsLoading(false);

      await deleteUserByIdAction({ id: user.id });
      toast.success(t('toast.success'));

      await wait(3000);
      logoutAccountAction();

      router.replace('/');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t('toast.error'));
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
              {t('title')}
            </h3>

            <IconButton icon={X} onClick={onClose} />
          </div>

          {hasActivePlan ? (
            <>
              <p className="text-text-secondary">{t('description.three')}</p>

              <strong className="text-text-secondary font-semibold">
                {t('description.four')}
              </strong>
            </>
          ) : (
            <>
              <p className="text-text-secondary">{t('description.one')}</p>
              <p className="text-text-secondary">{t('description.two')}</p>
            </>
          )}
        </div>

        <form
          className="flex flex-col md:flex-row items-end gap-4 w-full"
          onSubmit={handleDeleteAccount}
        >
          <Input
            id="delete-account"
            placeholder={t('input.password.placeholder')}
            className="w-full"
            required
            value={password}
            disabled={hasActivePlan}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button
            type="submit"
            variant="danger"
            className="w-full md:w-[188px]"
            disabled={hasActivePlan || isDeleteButtonDisabled || isLoading}
          >
            {t(isLoading ? 'action.submitting' : 'action.submit')}
          </Button>
        </form>
      </div>
    </Modal>
  );
}
