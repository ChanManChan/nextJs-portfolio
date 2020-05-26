import Anchor from './CustomLink';
import { useRouter } from 'next/router';
import Menu from './Menu';

const Navbar2 = () => {
  const { pathname } = useRouter();
  return (
    <Menu columns={4}>
      <Anchor href='/projects' isActive={pathname === '/projects'}>
        Projects
      </Anchor>
      <Anchor
        href='/particulars/categories'
        isActive={pathname === '/particulars/categories'}
        justify='start'
      >
        Particulars
      </Anchor>
      <Anchor
        href='/connect'
        isActive={pathname === '/connect'}
        justify='start'
      >
        Connect
      </Anchor>
      <Anchor href='/cv' isActive={pathname === '/cv'} justify='start'>
        Cv
      </Anchor>
    </Menu>
  );
};
export default Navbar2;
