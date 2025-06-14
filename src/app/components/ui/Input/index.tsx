import { concatClasses } from '@app/helpers';

interface InputProps {
  id: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;

  icon?: React.ElementType;
  onClickIcon?: () => void;
}

export default function Input({
  id,
  label,
  error,
  disabled,
  className,

  icon: Icon,
  onClickIcon,
  ...props
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id}>{label}</label>}

      <div
        className={concatClasses(
          'h-[48px] px-6 rounded-xl flex items-center gap-2 disabled:cursor-not-allowed bg-container border border-border',
          !!error && 'border-red-600',
          className
        )}
      >
        <input
          {...props}
          id={id}
          disabled={disabled}
          className="h-full w-full"
        />

        {!!Icon && (
          <button
            type="button"
            onClick={onClickIcon}
            className={concatClasses(
              'flex items-center justify-center h-full',
              !!onClickIcon && 'cursor-pointer'
            )}
          >
            <Icon
              className={concatClasses(
                'size-5 text-primary',
                disabled && 'text-text-secondary',
                !!error && 'text-red-600'
              )}
            />
          </button>
        )}
      </div>

      {!!error && (
        <span className="text-red-600 text-sm font-medium">{error}</span>
      )}
    </div>
  );
}
