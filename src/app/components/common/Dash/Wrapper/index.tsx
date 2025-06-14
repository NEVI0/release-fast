export default function DashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-screen flex items-start">{children}</div>;
}
