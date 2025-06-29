import { Body, Data, Head, Row } from './components';

type TableProps = React.FC<{
  children: React.ReactNode;
}> & {
  Body: typeof Body;
  Head: typeof Head;
  Row: typeof Row;
  Data: typeof Data;
};

const Table: TableProps = ({ children }) => {
  return (
    <div className="rounded-2xl border border-border overflow-hidden">
      <table className="border-collapse w-full bg-container text-text-primary">
        {children}
      </table>
    </div>
  );
};

Table.displayName = 'Table';

Table.Body = Body;
Table.Body.displayName = 'Table.Body';

Table.Head = Head;
Table.Head.displayName = 'Table.Head';

Table.Row = Row;
Table.Row.displayName = 'Table.Row';

Table.Data = Data;
Table.Data.displayName = 'Table.Data';

export default Table;
