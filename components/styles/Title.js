import styled, { keyframes } from 'styled-components';

/**The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color. */

const TextWrapper = styled.div`
  @font-face {
    font-family: neon;
    src: url('/neon.ttf');
  }
  justify-self: center;
  align-self: center;
  position: relative;
  z-index: 1;
`;

const neon = keyframes`
  0%,
  100% {
    /* The last CSV is the position of the offset text*/
    text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
    color: #FED128;
  }
  50% {
    /* Reduce each blur radius by half except for the offset text-shadow*/
    text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
    color: #806914;
  }
`;
const flux = keyframes`
 0%,
  100% {
    /* The last CSV is the position of the offset text*/
    text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
    color: #28D7FE;
  }
  50% {
    /* Reduce each blur radius by half except for the offset text-shadow*/
    text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;
    color: #146C80;
  }
`;

const Neon = styled.div`
  font-family: neon;
  font-size: 9vw;
  line-height: 9vw;
  animation: ${neon} 1s ease infinite;
  pointer-events: none;
`;
const Flux = styled.div`
  font-family: neon;
  font-size: 9vw;
  line-height: 9vw;
  animation: ${flux} 2s linear infinite;
  pointer-events: none;
`;

const Title = ({ neon, flux }) => (
  <TextWrapper className='title--wrapper'>
    <Neon>{neon}</Neon>
    <Flux>{flux}</Flux>
  </TextWrapper>
);
export default Title;
