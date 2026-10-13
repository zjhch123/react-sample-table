import Table from './components/Table';
import { users } from './data/users';
import { useColumn } from './hooks/use-column';

export default function App() {
  const column = useColumn();

  return (
    <main className="page">
      <header className="page-header">
        <h1>用户列表</h1>
      </header>
      <Table column={column} dataSource={users} rowKey={(user) => user.id} />
    </main>
  );
}
