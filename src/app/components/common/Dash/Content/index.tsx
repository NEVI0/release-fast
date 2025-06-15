interface DashContentProps {
  children: React.ReactNode;
}

export default function DashContent({ children }: DashContentProps) {
  return (
    <main className="w-full h-full flex flex-col gap-8 p-8">{children}</main>
  );
}
