import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import AppNavbar from '../shared/Navbar';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 4rem;
  position: fixed;
  left: 2rem;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${(p) => p.theme.primaryColor};
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 81.25rem) {
    margin: 0;
    text-align: center;
  }
`;
const StyledHeader = styled.header`
  .bar {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 81.25rem) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className='bar'>
      <Logo>
        <Link href='/'>
          <a>Nanda Gopal</a>
        </Link>
      </Logo>
      <AppNavbar />
    </div>
  </StyledHeader>
);

export default Header;
