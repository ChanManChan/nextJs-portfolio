import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import withParent from '@/hoc/withParent';
import FooterInput from '@/components/shared/S_input';
import PostButton from '@/components/shared/PostButton';
import Posts from '@/components/shared/Posts';
import Table from '@/components/shared/Table';

const Secret = () => {
  return (
    <div>
      <h1>Testing secret component functionality</h1>
      <Posts />
      <PostButton size='medium' themeColor='#444'>
        Create a Post
      </PostButton>
      <FooterInput />
      <Table />
    </div>
  );
};

export default withApollo(
  withAuth(withParent(Secret), ['admin', 'instructor'])
);
