import styled, { keyframes } from 'styled-components';

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
    text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
    color: #FED128;
  }
  50% {
    text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
    color: #806914;
  }
`;
const flux = keyframes`
 0%,
  100% {
    text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
    color: #28D7FE;
  }
  50% {
    text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;
    color: #146C80;
  }
`;

const Neon = styled.div`
  font-family: neon;
  color: #fb4264;
  font-size: 9vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #f40a35;
  animation: ${neon} 1s ease infinite;
  -moz-animation: ${neon} 1s ease infinite;
  -webkit-animation: ${neon} 1s ease infinite;
`;
const Flux = styled.div`
  font-family: neon;
  color: #426dfb;
  font-size: 9vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #2356ff;
  animation: ${flux} 2s linear infinite;
  -moz-animation: ${flux} 2s linear infinite;
  -webkit-animation: ${flux} 2s linear infinite;
  -o-animation: ${flux} 2s linear infinite;
`;

const Title = ({ neon, flux }) => (
  <TextWrapper>
    <Neon>{neon}</Neon>
    <Flux>{flux}</Flux>
  </TextWrapper>
);
export default Title;