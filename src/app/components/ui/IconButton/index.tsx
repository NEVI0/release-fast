import { concatClasses } from '@app/helpers';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export default function IconButton({ icon, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={concatClasses(
        'w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center rounded-xl text-primary hover:bg-primary/15 transition-colors cursor-pointer',
        props.className
      )}
    >
      {icon}
    </button>
  );
}
