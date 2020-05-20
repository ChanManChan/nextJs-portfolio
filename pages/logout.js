import withApollo from '@/hoc/withApollo';
import Loading from '@/components/styles/Loading';
import Disabled_State from '@/components/styles/Disabled_State';
import { useSignOut } from '@/apollo/actions';
import { useRouter } from 'next/router';
import withParent from '@/hoc/withParent';

//! Apollo Reference will be received here as props because of "withApollo" HOC
const Logout = ({ apollo }) => {
  const [signOut, { loading }] = useSignOut();
  const router = useRouter();
  React.useEffect(() => {
    signOut().then(() => {
      //! This will wipe out my entire cache data.
      apollo.resetStore().then(() => router.push('/login'));
    });
  }, []);
  return (
    <Disabled_State cover loading={`${loading}`}>
      <Loading msg='Closing Session...' loading={`${loading}`} />
    </Disabled_State>
  );
};

export default withApollo(withParent(Logout));
