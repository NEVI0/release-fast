import Image from 'next/image';
import Link from 'next/link';

export default function DashSidebar() {
  return (
    <aside className="h-full w-[400px] border-r border-border">
      <div className="p-6 h-[60px] border-b border-border">
        <Link href="/" className="h-full flex items-center">
          <Image
            src="/images/logo.png"
            alt="Release Fast Logo"
            width={198}
            height={36}
          />
        </Link>
      </div>

      <nav className="p-6">Links</nav>
    </aside>
  );
}
