import { concatClasses } from '@app/helpers';

interface RowProps {
  id: string;
  isLast?: boolean;
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ id, isLast, children }) => {
  return (
    <tr
      key={id}
      className={concatClasses(
        'text-left h-[64px] hover:bg-border/20 transition-colors',
        !isLast && 'border-b border-border'
      )}
    >
      {children}
    </tr>
  );
};

export default Row;
