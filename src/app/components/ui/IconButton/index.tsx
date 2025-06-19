import { concatClasses } from '@app/helpers';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ElementType;
}

export default function IconButton({ icon: Icon, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={concatClasses(
        'w-[40px] h-[40px] flex items-center justify-center rounded-xl text-primary focus:bg-primary/15 hover:bg-primary/15 transition-colors cursor-pointer',
        props.className
      )}
    >
      <Icon className="size-5" />
    </button>
  );
}
