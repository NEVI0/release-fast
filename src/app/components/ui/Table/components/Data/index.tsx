import { concatClasses } from '@app/helpers';

interface DataProps {
  /** @param width Width as pixels. E.g: 100px */
  width?: string;
  children: React.ReactNode;
}

const Data: React.FC<DataProps> = ({ width, children }) => {
  return (
    <th
      className={concatClasses('font-normal px-8', !!width && `w-[${width}]`)}
    >
      {children}
    </th>
  );
};

export default Data;
