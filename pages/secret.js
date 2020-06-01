import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import withParent from '@/hoc/withParent';

const Secret = () => {
  return (
    <div>
      <h1>Testing secret component functionality</h1>
    </div>
  );
};

export default withApollo(
  withAuth(withParent(Secret), ['admin', 'instructor'])
);
