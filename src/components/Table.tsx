import type { Key } from 'react';
import type { User } from '../data/users';

export interface Column {
  key: keyof User;
  title: string;
}

interface TableProps {
  column: Column[];
  dataSource: User[];
  rowKey: (record: User) => Key;
}

export default function Table({ column, dataSource, rowKey }: TableProps) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {column.map((item) => (
              <th key={item.key} scope="col">
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((record) => (
            <tr key={rowKey(record)}>
              {column.map((item) => (
                <td key={item.key}>{record[item.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
