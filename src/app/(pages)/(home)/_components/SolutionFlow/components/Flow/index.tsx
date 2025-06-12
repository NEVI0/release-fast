interface FlowProps {
  text: string;
  icon: React.ReactNode;
}

export default function Flow({ text, icon }: FlowProps) {
  return (
    <div className="flex flex-col items-center gap-4 w-[124px]">
      <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-primary/25">
        {icon}
      </div>

      <p className="w-full text-primary text-center">{text}</p>
    </div>
  );
}
