interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      <div className="flex flex-col gap-16 min-h-screen max-w-6xl w-full px-8 py-16">
        {children}
      </div>
    </main>
  );
}
