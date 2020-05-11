import styled, { keyframes } from 'styled-components';
import Title from '../styles/Title';
import TitleButton from './ShimmerButton';
import Link from 'next/link';

const HeroContainer = styled.div`
  height: 100vh;
  background: url('/bg.jpeg') center bottom;
  background-size: cover;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  position: relative;
  &:after {
    content: '';
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const textBackground = keyframes`
  from{
    background-position:0 0;
  }
  to{
    /* bottom-right movement */
    background-position:100% 100%
  }
`;

const TitleInfo = styled.div`
  width: 100%;
  justify-self: center;
  align-self: center;
  position: relative;
  z-index: 1;
  font-family: 'Press Start 2P', cursive;
  color: #fff;
  & > *:not(:last-child) {
    margin-bottom: 5rem;
  }
  > h1 {
    background: url('/hero_bg.jpg');
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: ${textBackground} 20s linear infinite;
  }
`;
const Hero = () => (
  <HeroContainer>
    <Title neon='MERN' flux='Stack' />
    <TitleInfo>
      <h1> Hey, I'm Nanda Gopal. Experienced full stack developer</h1>
      <h3> Check out my portfolio</h3>
      <Link href='/portfolios' passHref>
        <TitleButton large themeColor='#fff'>
          see my work
        </TitleButton>
      </Link>
    </TitleInfo>
  </HeroContainer>
);
export default Hero;
