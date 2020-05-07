import styled, { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';
import Hamburger from './MobileMenuIcon';
import Menu from './Menu';
import CustomLink from './CustomLink';
import Toggle from './Toggle';

const NavWrapper = styled.header`
  height: 6rem;
  width: 100%;
  display: flex;
  padding: 0 1.6rem;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.staticColor1},
    ${(p) => p.theme.staticColor2}
  );
  border-bottom: 0.3rem solid ${(p) => p.theme.staticColor2};
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
