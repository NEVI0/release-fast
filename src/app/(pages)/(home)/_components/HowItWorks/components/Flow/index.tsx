interface FlowProps {
  text: string;
  index: number;
  icon: React.ReactNode;
}

export default function Flow({ text, index, icon }: FlowProps) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-4 w-[124px]">
        <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-primary/25">
          {icon}
        </div>

        <p className="w-full text-primary text-center">
          <strong>{index}. </strong>
          {text}
        </p>
      </div>
    </div>
  );
}
