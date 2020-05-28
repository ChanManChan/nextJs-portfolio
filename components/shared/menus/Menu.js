import styled, { css } from 'styled-components';

const detectAuto = (props) => {
  if (props.auto)
    return css`
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
      margin-right: 4.3rem;
    `;
  else
    return css`
      grid-template-columns: repeat(${props.columns}, 1fr);
    `;
};

const Menu = styled.nav`
  /* MOBILE */
  display: ${(p) => (p.open ? 'block' : 'none')};
  @media (min-width: 768px) {
    /* DESKTOP */
    display: grid;
    ${detectAuto}
    justify-items: center;
    align-items: center;
  }
`;

export default Menu;
