import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const AppLink = ({ children, className, href }) =>
  <Link href={href}>
    <a className={className} >
      {children}
    </a>
  </Link>

const AppNavbar = () => {
  return (
    <div className='navbar-wrapper'>
      <Navbar expand="lg" className='navbar-dark fj-mw9'>
        <AppLink href="/" className="navbar-brand mr-3 font-weight-bold">NandaGopal</AppLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <AppLink href="/portfolios" className="nav-link mr-3">
              Portfolios
            </AppLink>
            <AppLink href="/forum/categories" className="nav-link mr-3">
              Forum
            </AppLink>
            <AppLink href="/cv" className="nav-link mr-3">
              Cv
            </AppLink>
          </Nav>
          <Nav>
            <AppLink href="/login" className="nav-link mr-3" >
              Sign In
            </AppLink>
            <AppLink href="/register" className="mr-3 btn btn-success bg-green-2 bright">
              Sign Up
            </AppLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
