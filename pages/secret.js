import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import withParent from '@/hoc/withParent';
import FooterInput from '@/components/shared/S_input';
import PostButton from '@/components/shared/PostButton';

const Secret = () => {
  return (
    <div>
      <h1>Testing secret component functionality</h1>
      <PostButton large themeColor='#444'>
        Create a Post
      </PostButton>
      <FooterInput />
    </div>
  );
};

export default withApollo(
  withAuth(withParent(Secret), ['admin', 'instructor'])
);
