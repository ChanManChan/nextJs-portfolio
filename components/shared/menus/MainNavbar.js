import styled, { ThemeContext } from 'styled-components';
import Anchor from '../buttons/CustomLink';
import { useRouter } from 'next/router';
import Menu from './Menu';
import Logo from '@/components/styles/Logo';
import { useLazyFetchUser } from '@/apollo/actions';
import Dropdown from './DropdownMenu';
import Toggle from '../buttons/Toggle';
import withApollo from '@/hoc/withApollo';

const Grid = styled.div`
  display: none;
  position: fixed;
  z-index: 100;
  top: 0;
  height: 7rem;
  width: 100%;
  padding: 0 1.6rem;
  background: ${(p) => p.theme.secondaryColor};
  border-bottom: 0.5rem solid ${(p) => p.theme.primaryColor};
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 50% auto 45%;
    justify-items: center;
    align-items: center;
  }
  @media (min-width: 1750px) {
    grid-template-columns: 35% auto 30%;
  }
`;

const Grid_child1 = styled.div`
  grid-column: 1/2;
  display: grid;
  grid-template-columns: auto 1fr;
  & > nav > a {
    font-size: 2rem;
    margin: 0 1.5rem;
  }
  @media (max-width: 1200px) {
    & > nav > a {
      font-size: 1.2rem;
      margin: 0 0.9rem;
    }
  }
`;

const Grid_child2 = styled.div`
  grid-column: 3/-1;
  width: 100%;
  position: relative;
  & > nav > a {
    font-size: 2rem;
    margin: 0 1.5rem;
  }
  @media (max-width: 1200px) {
    & > nav > a {
      font-size: 1.2rem;
      margin: 0 0.9rem;
    }
  }
`;

const MainNavbar = () => {
  const [user, setUser] = React.useState(null);
  //! After the mutation of signIn is completed, i could store the data into the cache and when i do that , this "fetchUser" will be re-executed and i'll receive here new data. Therefore Navbar username will be automatically updated.
  const [fetchUser, { data, error }] = useLazyFetchUser();
  const { id, toggleTheme } = React.useContext(ThemeContext);
  const { pathname } = useRouter();

  React.useEffect(() => {
    fetchUser();
  }, []);

  if (data) {
    if (data.user && !user) setUser(data.user);
    if (!data.user && user) setUser(null);
  }

  return (
    <Grid>
      <Grid_child1>
        <Logo />
        <Menu columns={4}>
          <Anchor href='/projects' isActive={pathname === '/projects'}>
            Projects
          </Anchor>
          <Anchor
            href='/particulars/categories'
            isActive={pathname === '/particulars/categories'}
            justify='start'
          >
            Particulars
          </Anchor>
          <Anchor
            href='/connect'
            isActive={pathname === '/connect'}
            justify='start'
          >
            Connect
          </Anchor>
          <Anchor href='/cv' isActive={pathname === '/cv'} justify='start'>
            Cv
          </Anchor>
        </Menu>
      </Grid_child1>
      <Grid_child2>
        <Menu auto>
          {error || !user ? (
            <>
              <Anchor
                href='/login'
                isActive={pathname === '/login'}
                justify='end'
              >
                Sign In
              </Anchor>
              <Anchor href='/register' isActive={pathname === '/register'}>
                Sign Up
              </Anchor>
            </>
          ) : (
            <>
              {user.role === 'admin' && (
                <Dropdown pathName={pathname} user={user} />
              )}
              <Anchor
                href='/'
                isActive={pathname === '/'}
                username
                justify={user.role === 'admin' ? 'center' : 'end'}
              >
                {user.username}
              </Anchor>
              <Anchor href='/logout' signOut isActive={pathname === '/logout'}>
                Sign Out
              </Anchor>
            </>
          )}
        </Menu>
        <Toggle isActive={id === 'dark'} onToggle={toggleTheme} />
      </Grid_child2>
    </Grid>
  );
};

export default withApollo(MainNavbar);
