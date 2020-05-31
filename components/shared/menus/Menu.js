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

const shared = ({ mobile, ...p }) => css`
  flex-flow: ${mobile ? 'column wrap' : 'unset'};
  align-items: ${mobile ? 'center' : 'unset'};
  width: ${mobile ? '100%' : 'unset'};
  position: ${mobile ? 'absolute' : 'unset'};
  top: ${mobile ? '7rem' : 'unset'};
  left: ${mobile ? '0' : 'unset'};
  padding: ${mobile ? '0.8rem' : 'unset'};
  background: ${mobile ? `${p.theme.quaternaryColor}` : 'unset'};
  border-bottom: ${mobile ? `0.5rem solid ${p.theme.gridColor}` : 'unset'};
  & > * {
    margin-bottom: ${mobile ? '1rem !important' : 'unset !important'};
  }
`;

const Menu = styled.nav`
  /* MOBILE */
  display: ${(p) => (p.open ? 'flex' : 'none')};
  ${shared}
  @media (min-width: 768px) {
    /* DESKTOP */
    ${shared}
    display: grid;
    ${detectAuto}
    justify-items: center;
    align-items: center;
  }
`;

export default Menu;
