import Link from 'next/link';

import { IconButton } from '@app/components/ui';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

export default function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <IconButton icon={icon} />
    </Link>
  );
}
