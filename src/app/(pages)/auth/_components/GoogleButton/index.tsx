import Image from 'next/image';

interface GoogleLoginButtonProps {
  children: React.ReactNode;
}

export default function GoogleButton({
  children,
  ...props
}: GoogleLoginButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="h-[48px] px-6 rounded-xl font-semibold whitespace-nowrap flex items-center justify-center gap-4 bg-container border border-border hover:border-border-action focus:border-border-action transition-colors text-text-primary cursor-pointer"
    >
      <Image
        src="/icons/google-icon.png"
        alt="Google Icon"
        width={24}
        height={24}
      />
      {children}
    </button>
  );
}
