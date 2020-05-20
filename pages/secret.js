import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';

const Secret = withAuth(() => {
  return (
    <div>
      <h1>Testing secret component functionality</h1>
    </div>
  );
}, ['admin', 'instructor']);

export default withApollo(Secret);
