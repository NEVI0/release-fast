import Link from 'next/link';
import { MailPlus, MailQuestion } from 'lucide-react';

import { UserAbstract } from '@domain/entities';
import { Button, Modal } from '@app/components/ui';

interface ProvideEmailModalProps {
  user: UserAbstract;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProvideEmailModal({
  user,
  isOpen,
  onClose,
}: ProvideEmailModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-8 bg-container border border-border p-8 rounded-3xl w-[324px]">
        <div>
          <MailQuestion className="size-16 text-primary" />
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-center font-semibold text-2xl">
            E-mail not provided!
          </h2>

          <p className="text-center text-text-secondary">
            You need to provide your e-mail first before buying any plan of
            Release Fast. Click in the button below and provide your e-mail.
          </p>
        </div>

        <Link href="/dash/profile/edit" className="w-full">
          <Button variant="primary" className="w-full">
            Provide e-mail <Button.Icon icon={MailPlus} />
          </Button>
        </Link>
      </div>
    </Modal>
  );
}
