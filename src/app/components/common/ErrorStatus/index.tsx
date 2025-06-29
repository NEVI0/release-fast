interface ErrorStatusProps {
  title: string;
  message: string;
  children?: React.ReactNode;
}

export default function ErrorStatus({
  title,
  message,
  children,
}: ErrorStatusProps) {
  return (
    <section className="flex-1 flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-2xl font-semibold">{title}</h2>
        <p className="text-center text-text-secondary w-[80%]">{message}</p>
      </div>

      {!!children && <div>{children}</div>}
    </section>
  );
}
