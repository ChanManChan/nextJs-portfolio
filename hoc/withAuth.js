import { useFetchUser } from '@/apollo/actions';
import Redirect from '@/components/shared/Redirect';
import Loading from '@/components/styles/Loading';
import Disabled_State from '@/components/styles/Disabled_State';

export default (WrappedComponent, role) => (props) => {
  //! Do not check if the user is present in the cache, send a request to the server always in this case. (This query will always send request to the server)
  const { data: { user } = {}, loading, error } = useFetchUser({
    fetchPolicy: 'network-only',
  });
  if (!loading && (!user || error) && typeof window !== 'undefined')
    return <Redirect to='/login' />;
  if (user) {
    if (role && user.role !== role) return <Redirect to='/' />;
    return <WrappedComponent {...props} />;
  }
  return (
    <Disabled_State cover loading={`${loading}`}>
      <Loading msg='Authenticating...' loading={`${loading}`} />
    </Disabled_State>
  );
};
