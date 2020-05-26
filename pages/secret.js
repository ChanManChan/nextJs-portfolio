import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import withParent from '@/hoc/withParent';
import Posts from '@/components/shared/Posts';

const Secret = () => {
  return (
    <div>
      <h1>Testing secret component functionality</h1>
      <Posts />
    </div>
  );
};

export default withApollo(
  withAuth(withParent(Secret), ['admin', 'instructor'])
);
