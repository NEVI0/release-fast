import { concatClasses } from '@app/helpers';

type InfoVariant = 'primary' | 'secondary';

interface InfoProps {
  value: string;
  variant?: InfoVariant;
  children: React.ReactNode;
}

const OUTSIDE_CIRCLE_STYLE: Record<InfoVariant, string> = {
  primary: 'bg-primary/25',
  secondary: 'bg-secondary/25',
};

const INSIDE_CIRCLE_STYLE: Record<InfoVariant, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
};

const INSIDE_CIRCLE_VALUE_STYLE: Record<InfoVariant, string> = {
  primary: 'text-white',
  secondary: 'text-text-primary',
};

export default function Info({
  value,
  variant = 'primary',
  children,
}: InfoProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[90%] md:w-[200px]">
      <div
        className={concatClasses(
          'flex items-center justify-center w-[152px] h-[152px] rounded-full',
          OUTSIDE_CIRCLE_STYLE[variant]
        )}
      >
        <div
          className={concatClasses(
            'flex items-center justify-center w-[116px] h-[116px] rounded-full',
            INSIDE_CIRCLE_STYLE[variant]
          )}
        >
          <p
            className={concatClasses(
              'text-2xl font-semibold',
              INSIDE_CIRCLE_VALUE_STYLE[variant]
            )}
          >
            {value}
          </p>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
