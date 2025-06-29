import { concatClasses } from '@app/helpers';

interface RowProps {
  isLast?: boolean;
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ isLast, children }) => {
  return (
    <tr
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
