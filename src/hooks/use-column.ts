import React from 'react';
import type { Column } from '../components/Table';

export const useColumn = () => {
  const columns: Column[] = React.useMemo(() => [
    {
      key: 'id',
      title: 'ID',
    },
    {
      key: 'name',
      title: '姓名',
    },
    {
      key: 'age',
      title: '年龄',
    },
    {
      key: 'department',
      title: '部门',
    },
    {
      key: 'email',
      title: '邮箱',
    },
  ], []);

  return columns;
};
