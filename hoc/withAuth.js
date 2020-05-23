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

export default (WrappedComponent, role, options = { ssr: false }) => {
  function WithAuth(props) {
    //! Do not check if the user is present in the cache, send a request to the server always in this case. (This query will always send request to the server)
    const { data: { user } = {}, loading, error } = useFetchUser({
      fetchPolicy: 'network-only',
    });
    if (!loading && (!user || error) && typeof window !== 'undefined')
      return <Redirect to='/login' query={{ message: 'NOT_AUTHENTICATED' }} />;
    if (user) {
      if (role && !role.includes(user.role))
        return <Redirect to='/' query={{ message: 'NOT_AUTHORIZED' }} />;
      return <WrappedComponent {...props} />;
    }
    //! "Warning: Did not expect server HTML to contain a <div> in <div>" <- because below JSX is what the client is getting from the server , but as soon as we're getting to our client, the browser code is executed we're redirecting to a new page and we're getting different HTML. <- Because of navigation through URL bar rather than using Links.
    //! Navigation through the Links is different from navigation through the URL bar. When we are navigating through the Link, the functionality of "getInitialProps" is executed differently (because "getInitialProps" in the case  when we are navigating through the links is executed on the clients and not on the server).
    //! No such errors will be registered when we navigate through Links rather than navigating manually using the URL bar.
    //! Links <- Everything is rendered Client-side.
    //! URL <- Server-side functionality executed.
    return (
      <Container>
        <Disabled_State cover loading={`${loading}`}>
          <Loading msg='Authenticating...' loading={`${loading}`} />
        </Disabled_State>
      </Container>
    );
  }
  if (options.ssr) {
    //! This "getInitialProps" function is both executed on the server and on the client.
    const server_redir = (res, to) => {
      res.redirect(to);
      res.end();
      return {};
    };

    WithAuth.getInitialProps = async (ctx) => {
      const { req, res } = ctx;
      //! User object is defined on the request (through passport middleware). And if the user is not present, we can redirect here on the server even before we're rendering any page.
      if (req) {
        //! Execute this functionality on the server only
        const { user } = req;
        //! Redirection functionality on the server
        if (!user) return server_redir(res, '/login?message=NOT_AUTHENTICATED');
        if (role && !role.includes(user.role))
          return server_redir(res, '/?message=NOT_AUTHORIZED');
      }
      const pageProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));
      return { ...pageProps };
    };
  }
  return WithAuth;
};
