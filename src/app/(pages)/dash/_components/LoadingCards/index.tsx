import { Skeleton } from '@app/components/ui';

export default function LoadingCards() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-4">
      <Skeleton className="w-full h-[182px] rounded-2xl border border-border" />

      <Skeleton className="w-full h-[182px] rounded-2xl border border-border" />

      <Skeleton className="w-full h-[182px] rounded-2xl border border-border" />
    </section>
  );
}
