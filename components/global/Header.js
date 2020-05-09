import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import AppNavbar from '../shared/Navbar';
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
  z-index: 10000;
  top: 0;
  display: grid;
  grid-template-columns: 10% auto 40%;
  justify-items: center;
  align-items: center;
  height: 7rem;
  width: 100%;
  padding: 0 1.6rem;
  background: ${(p) => p.theme.secondaryColor};
  border-bottom: 0.5rem solid ${(p) => p.theme.primaryColor};
`;

const Header = () => (
  <StyledHeader>
    <Link href='/'>
      <a>
        <Logo />
      </a>
    </Link>
    <AppNavbar />
  </StyledHeader>
);

export default Header;
