import Link from 'next/link';

export default function LoginLink() {
  return (
    <Link
      href="/access"
      className="cursor-pointer h-full flex items-center justify-center font-semibold underline text-primary"
    >
      Access Dashboard
    </Link>
  );
}
