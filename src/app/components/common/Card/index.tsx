interface CardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  children?: React.ReactNode;
}

export default function Card({
  title,
  value,
  icon: Icon,
  children,
}: CardProps) {
  return (
    <div className="bg-container border border-border rounded-2xl flex flex-col px-8 py-6 gap-6 w-full">
      <div className="w-[48px] h-[48px] flex items-center justify-center rounded-xl bg-primary/10">
        <Icon className="text-primary" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-lg text-text-secondary">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
