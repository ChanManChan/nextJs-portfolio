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
      <Logo></Logo>
      <AppNavbar />
    </div>
  </StyledHeader>
);

export default Header;
{
  /* <Link href='/'>
<a></a>
</Link> */
}
