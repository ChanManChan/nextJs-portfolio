import { useFetchUser } from '@/apollo/actions';
import Redirect from '@/components/shared/Redirect';
import Loading from '@/components/styles/Loading';
import Disabled_State from '@/components/styles/Disabled_State';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 120rem;
  margin: 15rem auto 0 auto;
  padding: 0 1rem;
`;

export default (WrappedComponent, role) => (props) => {
  //! Do not check if the user is present in the cache, send a request to the server always in this case. (This query will always send request to the server)
  const { data: { user } = {}, loading, error } = useFetchUser({
    fetchPolicy: 'network-only',
  });
  if (!loading && (!user || error) && typeof window !== 'undefined')
    return <Redirect to='/login' />;
  if (user) {
    if (role && !role.includes(user.role)) return <Redirect to='/' />;
    return <WrappedComponent {...props} />;
  }
  //! Warning: Did not expect server HTML to contain a <div> in <div> <- because below JSX is what the client is getting from the server , but as soon as we're getting to our client, the browser code is executed we're redirecting to a new page and we're different HTML.
  return (
    <Container>
      <Disabled_State cover loading={`${loading}`}>
        <Loading msg='Authenticating...' loading={`${loading}`} />
      </Disabled_State>
    </Container>
  );
};
