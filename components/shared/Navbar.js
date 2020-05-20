import styled, { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';
import Hamburger from './MobileMenuIcon';
import Menu from './Menu';
import CustomLink from './CustomLink';
import Toggle from './Toggle';
import withApollo from '@/hoc/withApollo';
import { useLazyFetchUser } from '@/apollo/actions';
import Dropdown from '@/components/shared/DropdownMenu';

const NavWrapper = styled.div`
  grid-column: 3/-1;
  width: 100%;
  position: relative;
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
      <Menu open={menuOpen} auto>
        {error || !user ? (
          <>
            <CustomLink
              href='/login'
              isActive={pathname === '/login'}
              justify='end'
            >
              Sign In
            </CustomLink>
            <CustomLink href='/register' isActive={pathname === '/register'}>
              Sign Up
            </CustomLink>
          </>
        ) : (
          <>
            <Dropdown pathName={pathname} user={user} />
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
      </Menu>
      <Toggle isActive={id === 'dark'} onToggle={toggleTheme} />
    </NavWrapper>
  );
};

export default withApollo(AppNavbar);
