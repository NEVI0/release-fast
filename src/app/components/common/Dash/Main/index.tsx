interface DashMainProps {
  children: React.ReactNode;
}

export default function DashMain({ children }: DashMainProps) {
  return <main className="w-full flex flex-col gap-6 p-6">{children}</main>;
}
