import Image from 'next/image';
import Link from 'next/link';

export default function TopLogo() {
  return (
    <div className="absolute top-8 left-8">
      <Link href="/" className="h-full flex items-center justify-center">
        <Image
          src="/images/logo-dark.png"
          alt="Release Fast Logo"
          width={120}
          height={24}
        />
      </Link>
    </div>
  );
}
