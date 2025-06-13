interface HorizontalDividerProps {
  id?: string;
}

export default function HorizontalDivider({ id }: HorizontalDividerProps) {
  return <div id={id} className="w-full h-[1px] bg-border rounded-full" />;
}
