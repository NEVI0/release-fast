import { concatClasses } from '@app/helpers';

type CardVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';

interface CardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  variant?: CardVariant;
}

export default function Card({
  title,
  value,
  icon: Icon,
  variant = 'default',
}: CardProps) {
  return (
    <div className="bg-container border border-border rounded-2xl px-8 py-6 flex items-center justify-between w-full">
      <div className="flex flex-col">
        <p className="text-sm text-text-secondary">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>

      <div className="w-[48px] h-[48px] flex items-center justify-center rounded-2xl bg-primary/10">
        <Icon className=" text-primary" />
      </div>
    </div>
  );
}
