import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ReturnProps {
  href: string;
  text?: string;
}

export default function Return({ href, text }: ReturnProps) {
  return (
    <Link href={href} className="flex items-center gap-4 w-fit">
      <ArrowLeft className="size-5 text-primary" />
      {text || 'Voltar'}
    </Link>
  );
}
