import Anchor from './CustomLink';
import { useRouter } from 'next/router';
import Menu from './Menu';

const Navbar2 = () => {
  const { pathname } = useRouter();
  return (
    <Menu columns={3}>
      <Anchor href='/portfolios' isActive={pathname === '/portfolios'}>
        Portfolios
      </Anchor>
      <Anchor
        href='/forum/categories'
        isActive={pathname === '/forum/categories'}
      >
        Forum
      </Anchor>
      <Anchor href='/cv' isActive={pathname === '/cv'}>
        Cv
      </Anchor>
    </Menu>
  );
};
export default Navbar2;
