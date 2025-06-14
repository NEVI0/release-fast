import { concatClasses } from '@app/helpers';

interface HorizontalDividerProps {
  id?: string;
  className?: string;
}

export default function HorizontalDivider({
  id,
  className,
}: HorizontalDividerProps) {
  return (
    <div
      id={id}
      className={concatClasses(
        'w-full h-[1px] bg-border rounded-full',
        className
      )}
    />
  );
}
