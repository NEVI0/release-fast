import Link from 'next/link';
import { MailPlus, MailQuestion } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button, Modal } from '@app/components/ui';

interface ProvideEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProvideEmailModal({
  isOpen,
  onClose,
}: ProvideEmailModalProps) {
  const t = useTranslations('page.plans.provideEmail');

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="items-end md:items-center md:justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-8 bg-container border border-border p-8 rounded-t-4xl md:rounded-b-4xl w-full md:w-[324px]">
        <div>
          <MailQuestion className="size-16 text-primary" />
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-center text-text-primary font-semibold text-2xl">
            {t('title')}
          </h2>

          <p className="text-center text-text-secondary">{t('description')}</p>
        </div>

        <Link href="/dash/profile/edit" className="w-full">
          <Button variant="primary" className="w-full">
            {t('action.submit')} <Button.Icon icon={MailPlus} />
          </Button>
        </Link>
      </div>
    </Modal>
  );
}
