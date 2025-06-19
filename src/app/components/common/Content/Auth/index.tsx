interface AuthContentProps {
  children: React.ReactNode;
}

export default function AuthContent({ children }: AuthContentProps) {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <main className="flex flex-col gap-8 p-8 w-full max-w-[600px]">
        {children}
      </main>
    </div>
  );
}
