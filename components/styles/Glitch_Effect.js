import styled, { css, keyframes } from 'styled-components';

const getRandomInt = (max, init) =>
  Math.floor(Math.random() * Math.floor(max) + init);

const glitch_skew_CreateCSS = () => {
  let styles = '';
  for (let i = 0; i <= 10; i++) {
    styles += `
    ${i * (1 / 10) * 100}% {
      transform: skew(${getRandomInt(10, 1) - 5}deg);
    }
    `;
  }
  return css`
    ${styles}
  `;
};

const glitch_anim1_CreateCSS = () => {
  let styles = '';
  for (let i = 0; i <= 20; i++) {
    styles += `
    ${i * (1 / 20) * 100}% {
      clip: rect(${getRandomInt(31, 1)}px, 9999px, ${getRandomInt(31, 1)}px, 0);
      transform: skew(${getRandomInt(100, 1) / 100}deg);
    }
    `;
  }
  return css`
    ${styles}
  `;
};

const glitch_anim2_CreateCSS = () => {
  let styles = '';
  for (let i = 0; i <= 20; i++) {
    styles += `
    ${i * (1 / 20) * 100}% {
      clip: rect(${getRandomInt(32, 24)}px, 9999px, ${getRandomInt(
      32,
      24
    )}px, 0);
      transform: skew(${getRandomInt(100, 1) / 100}deg);
    }
    `;
  }
  return css`
    ${styles}
  `;
};

const glitch_skew = keyframes`
  ${glitch_skew_CreateCSS()}
`;

const glitch_anim1 = keyframes`
  ${glitch_anim1_CreateCSS()}
`;

const glitch_anim2 = keyframes`
${glitch_anim2_CreateCSS()}
`;

const shared = css`
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Span = styled.span`
  position: relative;
  font-family: 'Orbitron', sans-serif;
  font-size: 4rem;
  letter-spacing: 0.5rem;
  text-indent: 1rem;
  animation: ${glitch_skew} 1s infinite linear alternate-reverse;
  &:before {
    ${shared}
    left:0.2rem;
    text-shadow: -2px 0 #ff00c1;
    clip: rect(0, 45rem, 3.1rem, 0);
    animation: ${glitch_anim1} 5s infinite linear alternate-reverse;
  }
  &:after {
    ${shared}
    left: -0.2rem;
    text-shadow: -0.2rem 0 #00fff9, 0.2rem 0.2rem #ff00c1;
    clip: rect(3.2rem, 45rem, 5.5rem, 0);
    animation: ${glitch_anim2} 1s infinite linear alternate-reverse;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Custom_Span = ({ children }) => (
  <Wrapper>
    {children &&
      children.split(' ').map((w, i) => (
        <Span key={i} data-text={w}>
          {w}
        </Span>
      ))}
  </Wrapper>
);
export default Custom_Span;
