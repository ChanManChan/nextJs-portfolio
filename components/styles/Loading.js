import styled, { keyframes, css } from 'styled-components';

const spin = (p) => keyframes`
   0%, 100% {
    box-shadow:
      0px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px transparent;
  }
  6.25% {
    box-shadow:
      0px -30px transparent,
      10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      0px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px transparent;
  }
  12.5% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      0px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px transparent;
  }
  18.75% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px transparent,
      30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      0px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px transparent;
  }
  25% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px transparent,
      30px -10px transparent,
      30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      0px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px transparent;
  }
  31.25% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px transparent,
      30px -10px transparent,
      30px 0px transparent,
      30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      0px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px transparent;
  }
  37.5% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px transparent,
      30px -10px transparent,
      30px 0px transparent,
      30px 10px transparent,
      20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      0px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px -20px transparent,
      -10px -30px transparent;
  }
  43.75% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px transparent,
      30px -10px transparent,
      30px 0px transparent,
      30px 10px transparent,
      20px 20px transparent,
      10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      0px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px -30px transparent;
  }
  50% {
    box-shadow:
      0px -30px transparent,
      10px -30px transparent,
      20px -20px transparent,
      30px -10px transparent,
      30px 0px transparent,
      30px 10px transparent,
      20px 20px transparent,
      10px 30px transparent,
      0px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'};
  }
  56.25% {
    box-shadow:
      0px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px -30px transparent,
      20px -20px transparent,
      30px -10px transparent,
      30px 0px transparent,
      30px 10px transparent,
      20px 20px transparent,
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'};
  }
  62.5% {
    box-shadow:
      0px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px -20px transparent,
      30px -10px transparent,
      30px 0px transparent,
      30px 10px transparent,
      20px 20px transparent,
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'};
  }
  68.75% {
    box-shadow:
      0px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px -10px transparent,
      30px 0px transparent,
      30px 10px transparent,
      20px 20px transparent,
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'};
  }
  75% {
    box-shadow:
      0px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 0px transparent,
      30px 10px transparent,
      20px 20px transparent,
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'};
  }
  81.25% {
    box-shadow:
      0px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 10px transparent,
      20px 20px transparent,
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'};
  }
  87.5% {
    box-shadow:
      0px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px 20px transparent,
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      -10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'};
  }
  93.75% {
    box-shadow:
      0px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px -20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px -10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 0px ${p.theme.id === 'light' ? '#fff' : '#000'},
      30px 10px ${p.theme.id === 'light' ? '#fff' : '#000'},
      20px 20px ${p.theme.id === 'light' ? '#fff' : '#000'},
      10px 30px transparent,
      0px 30px transparent,
      -10px 30px transparent,
      -20px 20px transparent,
      -30px 10px transparent,
      -30px 0px transparent,
      -30px -10px transparent,
      -20px -20px transparent,
      -10px -30px ${p.theme.id === 'light' ? '#fff' : '#000'};
  }
`;

const state_Msg = ({ msg }) => {
  if (msg)
    return css`
      &:after {
        content: '${msg}';
        position: absolute;
        top: 500%;
        left: 0;
        white-space: nowrap;
        transform: translateX(-50%);
        z-index: 11;
        color: ${(p) => (p.theme.id === 'light' ? '#fff' : '#000')};
        font-family: 'Open Sans', sans-serif;
        font-size: 3rem;
      }
    `;
};

const Spinner = styled.div`
  height: 1rem;
  width: 1rem;
  display: ${(p) => (p.loading === 'true' ? 'block' : 'none')};
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  margin: -0.5rem;
  animation: ${spin} 1s linear infinite;
  ${state_Msg}
`;

export default Spinner;
