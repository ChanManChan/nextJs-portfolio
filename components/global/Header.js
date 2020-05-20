import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import AppNavbar1 from '../shared/Navbar';
import AppNavbar2 from '../shared/Navbar2';
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
  grid-template-columns: 30% auto 20%;
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
    <div>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <AppNavbar2 />
    </div>
    <AppNavbar1 />
  </StyledHeader>
);

export default Header;
