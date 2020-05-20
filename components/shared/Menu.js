import styled from 'styled-components';

const Menu = styled.nav`
  /* MOBILE */
  display: ${(p) => (p.open ? 'block' : 'none')};
  @media (min-width: 768px) {
    /* DESKTOP */
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(${(p) => p.columns}, 1fr);
    align-items: center;
  }
`;

export default Menu;
