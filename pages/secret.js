import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import withParent from '@/hoc/withParent';
import Table from '@/components/shared/Table';

const Secret = () => {
  return (
    <div>
      <h1>Testing secret component functionality</h1>
      <Table />
    </div>
  );
};

export default withApollo(
  withAuth(withParent(Secret), ['admin', 'instructor'])
);
