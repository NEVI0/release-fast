import { concatClasses } from '@app/helpers';

export type ButtonVariant = 'default' | 'primary' | 'secondary';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

const BUTTON_VARIANT: Record<ButtonVariant, string> = {
  default:
    'text-text-primary bg-container border border-border enabled:hover:border-border-action enabled:focus:border-border-action',
  primary:
    'text-white bg-primary enabled:hover:bg-primary-action enabled:focus:bg-primary-action',
  secondary:
    'text-textprimary bg-secondary enabled:hover:bg-secondary-action enabled:focus:bg-secondary-action',
};

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={concatClasses(
        'h-[48px]  px-6 rounded-xl font-semibold whitespace-nowrap flex items-center justify-center gap-4 transition-colors cursor-pointer disabled:cursor-not-allowed',
        BUTTON_VARIANT[variant],
        props.className
      )}
    >
      {children}
    </button>
  );
}
