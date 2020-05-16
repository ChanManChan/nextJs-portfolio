import styled, { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';
import Hamburger from './MobileMenuIcon';
import Menu from './Menu';
import CustomLink from './CustomLink';
import Toggle from './Toggle';
import withApollo from '@/hoc/withApollo';
import { useLazyFetchUser } from '@/apollo/actions';

const NavWrapper = styled.div`
  grid-column: 3/-1;
`;

const AppNavbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);
  //! After the mutation of signIn is completed, i could store the data into the cache and when i do that , this "fetchUser" will be re-executed and i'll receive here new data. Therefore Navbar username will be automatically updated.
  const [fetchUser, { data, error }] = useLazyFetchUser();

  React.useEffect(() => {
    fetchUser();
  }, []);

  if (data) {
    if (data.user && !user) setUser(data.user);
    if (!data.user && user) setUser(null);
  }

  const { pathname } = useRouter();
  const { id, toggleTheme } = React.useContext(ThemeContext);
  return (
    <NavWrapper>
      <Hamburger onClick={() => setMenuOpen((s) => !s)} />
      <Menu open={menuOpen}>
        <CustomLink href='/portfolios' isActive={pathname === '/portfolios'}>
          Portfolios
        </CustomLink>
        <CustomLink
          href='/forum/categories'
          isActive={pathname === '/forum/categories'}
        >
          Forum
        </CustomLink>
        <CustomLink href='/cv' isActive={pathname === '/cv'}>
          Cv
        </CustomLink>
        {error || !user ? (
          <>
            <CustomLink href='/login' isActive={pathname === '/login'}>
              Sign In
            </CustomLink>
            <CustomLink href='/register' isActive={pathname === '/register'}>
              Sign Up
            </CustomLink>
          </>
        ) : (
          <>
            <CustomLink href='/' isActive={pathname === '/'} username>
              {user.username}
            </CustomLink>
            <CustomLink
              href='/logout'
              signOut
              isActive={pathname === '/logout'}
            >
              Sign Out
            </CustomLink>
          </>
        )}
        <Toggle isActive={id === 'dark'} onToggle={toggleTheme} />
      </Menu>
    </NavWrapper>
  );
};

export default withApollo(AppNavbar);
