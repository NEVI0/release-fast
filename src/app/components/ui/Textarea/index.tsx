import { concatClasses } from '@app/helpers';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  classNameInput?: string;
  icon?: React.ElementType;

  rightContent?: React.ReactNode;
}

export default function Textarea({
  id,
  label,
  error,
  disabled,
  className,
  classNameInput,
  icon: Icon,
  rightContent,
  ...props
}: TextareaProps) {
  return (
    <div className={concatClasses('flex flex-col gap-2', className)}>
      {label && (
        <div className="flex items-center justify-between">
          <label htmlFor={id} className="flex items-center gap-2">
            {label}
            {props.required && <span className="text-red-600">*</span>}
          </label>

          <div className="flex items-center gap-2">{rightContent}</div>
        </div>
      )}

      <div
        className={concatClasses(
          ' px-6 py-4 rounded-xl flex items-start gap-2 bg-container border border-border enabled:hover:not-focus-within:border-border-action enabled:focus-within:border-primary transition-colors',
          !!error && 'border-red-600',
          classNameInput
        )}
      >
        <textarea
          {...props}
          id={id}
          disabled={disabled}
          className="min-h-[200px] w-full text-text-primary placeholder:text-text-secondary disabled:cursor-not-allowed"
        />

        {!!Icon && (
          <Icon
            className={concatClasses(
              'size-5 text-primary',
              disabled && 'text-text-secondary',
              !!error && 'text-red-600'
            )}
          />
        )}
      </div>

      {!!error && (
        <span className="text-red-600 text-sm font-medium">{error}</span>
      )}
    </div>
  );
}
