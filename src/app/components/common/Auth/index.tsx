interface AuthProps {
  children: React.ReactNode;
}

export default function Auth({ children }: AuthProps) {
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="flex items-center justify-center w-1/2">
        <div className="flex flex-col p-16 gap-8 w-[70%]">{children}</div>
      </main>

      <div className="h-full w-[1px] bg-border" />

      <aside className="flex flex-col items-center justify-center w-1/2">
        image qualquer
      </aside>
    </div>
  );
}
