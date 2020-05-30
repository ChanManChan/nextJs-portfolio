import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import AppNavbar1 from '../shared/menus/Navbar';
import AppNavbar2 from '../shared/menus/Navbar2';
import Logo from '../styles/Logo';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const StyledHeader = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  display: grid;
  grid-template-columns: 35% auto 30%;
  justify-items: center;
  align-items: center;
  height: 7rem;
  width: 100%;
  padding: 0 1.6rem;
  background: ${(p) => p.theme.secondaryColor};
  border-bottom: 0.5rem solid ${(p) => p.theme.primaryColor};
`;

const SubGrid = styled.div`
  grid-column: 1/2;
  display: grid;
  grid-template-columns: auto 1fr;
`;

const Header = () => (
  <StyledHeader>
    <SubGrid>
      <Logo />
      <AppNavbar2 />
    </SubGrid>
    <AppNavbar1 />
  </StyledHeader>
);

export default Header;
