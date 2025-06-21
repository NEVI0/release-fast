interface SettingProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function Setting({
  title,
  description,
  children,
}: SettingProps) {
  return (
    <div className="bg-container border border-border rounded-2xl px-8 py-6 flex items-center justify-between w-full">
      <div className="flex flex-col">
        <h4 className="font-semibold text-xl">{title}</h4>
        <p className="text-text-secondary">{description}</p>
      </div>

      <div>{children}</div>
    </div>
  );
}
