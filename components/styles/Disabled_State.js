import styled, { css } from 'styled-components';

const state_Change = ({ loading }) => {
  if (loading === 'true')
    return css`
      &:after {
        content: '';
        background-color: ${(p) =>
          p.theme.id === 'light'
            ? 'rgba(0, 0, 0, 0.6)'
            : 'rgba(255,255,255,0.6)'};
        position: absolute;
        top: -1rem;
        left: -1rem;
        right: -1rem;
        bottom: -1rem;
        border-radius: 1rem;
      }
    `;
  else
    return css`
      &:after {
        content: '';
        background-color: transparent;
        position: absolute;
        top: 50%;
        left: 50%;
        right: 50%;
        bottom: 50%;
      }
    `;
};

const Container = styled.div`
  width: 100%;
  height: ${(p) => (p.cover ? '100vh' : '100%')};
  position: relative;
  background-color: transparent;
  &:after {
    content: '';
    transition: all 0.2s ease;
  }
  ${state_Change}
`;

export default Container;
