import { HorizontalDivider } from '@app/components/ui';

export default function OrSection() {
  return (
    <section className="flex items-center justify-center gap-8">
      <HorizontalDivider className="w-[64px]" />
      <small className="text-text-secondary text-sm">OU</small>
      <HorizontalDivider className="w-[64px]" />
    </section>
  );
}
