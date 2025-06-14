interface DashContentProps {
  children: React.ReactNode;
}

export default function DashContent({ children }: DashContentProps) {
  return <div className="w-full h-full">{children}</div>;
}
