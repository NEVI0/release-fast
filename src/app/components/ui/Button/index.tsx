import { concatClasses } from '@app/helpers';
import { Icon } from './components';

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'danger';

type ButtonProps = React.FC<
  {
    children: React.ReactNode;
    variant?: ButtonVariant;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  Icon: typeof Icon;
};

const BUTTON_VARIANT: Record<ButtonVariant, string> = {
  default:
    'text-text-primary bg-container border border-border disabled:text-text-secondary enabled:hover:border-border-action enabled:focus:border-border-action',
  primary:
    'text-white bg-primary disabled:bg-primary/25 enabled:hover:bg-primary-action enabled:focus:bg-primary-action',
  secondary:
    'text-textprimary bg-secondary enabled:hover:bg-secondary-action enabled:focus:bg-secondary-action',
  danger:
    'text-text-primary bg-container border border-border disabled:text-text-secondary enabled:hover:text-red-600 enabled:hover:border-red-600 enabled:focus:text-red-600 enabled:focus:border-red-600',
};

const Button: ButtonProps = ({
  children,
  type = 'button',
  variant = 'default',
  ...props
}) => {
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
};

Button.displayName = 'Button';

Button.Icon = Icon;
Button.Icon.displayName = 'Button.Icon';

export default Button;
