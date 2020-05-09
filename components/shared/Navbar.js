import styled, { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';
import Hamburger from './MobileMenuIcon';
import Menu from './Menu';
import CustomLink from './CustomLink';
import Toggle from './Toggle';

const NavWrapper = styled.div`
  grid-column: 3/-1;
`;

const AppNavbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
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
        <CustomLink href='/login' isActive={pathname === '/login'}>
          Sign In
        </CustomLink>
        <CustomLink href='/register' isActive={pathname === '/register'}>
          Sign Up
        </CustomLink>
        <Toggle isActive={id === 'dark'} onToggle={toggleTheme} />
      </Menu>
    </NavWrapper>
  );
};
export default AppNavbar;
