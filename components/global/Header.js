import Router from 'next/router';
import NProgress from 'nprogress';
import BreakpointMenu from '@/components/shared/menus/BreakpointMenu';
import MainNavbar from '@/components/shared/menus/MainNavbar';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <>
    <MainNavbar />
    <BreakpointMenu />
  </>
);

export default Header;
