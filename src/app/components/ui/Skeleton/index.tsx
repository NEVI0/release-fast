import { concatClasses } from '@app/helpers';

export default function Skeleton({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={concatClasses('bg-accent animate-pulse rounded-md', className)}
      {...props}
    />
  );
}
