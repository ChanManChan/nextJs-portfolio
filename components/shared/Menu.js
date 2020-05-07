import styled from 'styled-components';

const Menu = styled.nav`
  /* MOBILE */
  display: ${(p) => (p.open ? 'block' : 'none')};
  width: 100%;
  font-family: inherit;
  position: absolute;
  top: 6rem;
  left: 0;
  padding: 0.8rem;
  border-bottom: 3px solid #191970;
  background: #fff;
  @media (min-width: 768px) {
    /* DESKTOP */
    display: flex;
    position: relative;
    border-bottom: none;
    width: initial;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
  }
`;

export default Menu;
