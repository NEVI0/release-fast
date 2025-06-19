import { concatClasses } from '@app/helpers';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

export default function Badge({ children, variant = 'primary' }: BadgeProps) {
  return (
    <div
      className={concatClasses(
        'rounded-full px-2 py-1 text-xs',
        variant === 'primary' && 'bg-primary',
        variant === 'secondary' && 'bg-secondary',
        variant === 'success' && 'bg-green-500',
        variant === 'warning' && 'bg-yellow-500',
        variant === 'error' && 'bg-red-500'
      )}
    >
      <small className="text-xs text-white">{children}</small>
    </div>
  );
}
