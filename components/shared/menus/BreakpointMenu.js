import Hamburger from '@/components/styles/MobileMenuIcon';
import { useLazyFetchUser } from '@/apollo/actions';
import { useRouter } from 'next/router';
import withApollo from '@/hoc/withApollo';
import styled, { ThemeContext } from 'styled-components';
import Menu from './Menu';
import Anchor from '../buttons/CustomLink';
import Toggle from '../buttons/Toggle';
import Logo from '@/components/styles/Logo';
import Dropdown from './DropdownMenu';

const MenuContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 100;
  top: 0;
  height: 7rem;
  width: 100%;
  padding: 0 1.6rem;
  background: ${(p) => p.theme.secondaryColor};
  border-bottom: 0.5rem solid ${(p) => p.theme.primaryColor};
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const BreakpointMenu = () => {
  const [user, setUser] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [fetchUser, { data, error }] = useLazyFetchUser();
  const { pathname } = useRouter();
  const { id, toggleTheme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    fetchUser();
  }, []);

  if (data) {
    if (data.user && !user) setUser(data.user);
    if (!data.user && user) setUser(null);
  }

  return (
    <MenuContainer>
      <Logo />
      <Hamburger onClick={() => setMenuOpen((s) => !s)} />
      <Menu open={menuOpen} mobile>
        <Toggle isActive={id === 'dark'} onToggle={toggleTheme} />
        <Anchor href='/projects' isActive={pathname === '/projects'}>
          Projects
        </Anchor>
        <Anchor
          href='/particulars/categories'
          isActive={pathname === '/particulars/categories'}
        >
          Particulars
        </Anchor>
        <Anchor href='/connect' isActive={pathname === '/connect'}>
          Connect
        </Anchor>
        <Anchor href='/cv' isActive={pathname === '/cv'}>
          Cv
        </Anchor>
        {error || !user ? (
          <>
            <Anchor href='/login' isActive={pathname === '/login'}>
              Sign In
            </Anchor>
            <Anchor href='/register' isActive={pathname === '/register'}>
              Sign Up
            </Anchor>
          </>
        ) : (
          <>
            <Dropdown pathName={pathname} user={user} mobile />
            <Anchor href='/' isActive={pathname === '/'} username>
              {user.username}
            </Anchor>
            <Anchor href='/logout' signOut isActive={pathname === '/logout'}>
              Sign Out
            </Anchor>
          </>
        )}
      </Menu>
    </MenuContainer>
  );
};

export default withApollo(BreakpointMenu);
