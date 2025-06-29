import { concatClasses } from '@app/helpers';

interface Column {
  id: string;

  /** @param width Width as pixels. E.g: 100px */
  width?: string;
  center?: boolean;

  children: React.ReactNode;
}

interface HeadProps {
  columns: Column[];
}

const Head: React.FC<HeadProps> = ({ columns }) => {
  return (
    <thead>
      <tr className="border-b border-border text-left h-[64px]">
        {columns.map((column) => (
          <th
            key={column.id}
            className={concatClasses(
              'px-8',
              column.center && 'text-center',
              !!column.width && `w-[${column.width}]`
            )}
          >
            {column.children}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Head;
