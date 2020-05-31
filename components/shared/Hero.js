import styled, { keyframes } from 'styled-components';
import Title from '../styles/Title';
import TitleButton from './buttons/ShimmerButton';
import Link from 'next/link';

const HeroContainer = styled.div`
  height: 100vh;
  background: url('/bg.jpeg') center bottom;
  background-size: cover;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 1rem;
    /*
    * background: [ background-position | / |  background-size | background-repeat |  background-image ]
    * background: 50% 90% / 10% no-repeat url("../../media/examples/firefox-logo.svg") */
    background: center / cover no-repeat url('/dewey_greeting.png');
    width: 20rem;
    height: 20rem;
    z-index: 1;
  }
  &:after {
    content: '';
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media (max-width: 768px) {
    /*? Rows / Columns */
    grid: 35rem 1fr / repeat(2, 1fr);
    .title--wrapper {
      grid-area: 1/1/2/2;
    }
    .title--info {
      grid-area: 2/1/3/3;
      align-self: start;
      padding: 4rem;
    }
  }
  @media (max-width: 450px) {
    grid: 20rem 1fr / repeat(2, 1fr);
    .title--wrapper {
      align-self: end;
    }
    .title--info {
      padding-top: 7rem;
    }
  }
`;

const textBackground = keyframes`
  from{
    background-position:0 0;
  }
  to{
    /* bottom-right movement */
    background-position:100% 100%;
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

const H1 = styled.h1`
  @media (max-width: 1100px) {
    font-size: 2.5rem;
    & ~ a {
      padding: 1.5rem 2.5rem;
      border: 0.25rem solid #fff;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 768px) {
    font-size: 2.1rem;
    & ~ h3 {
      font-size: 1.2rem;
    }
    & ~ a {
      padding: 1rem 2rem;
      border: 0.15rem solid #fff;
      font-size: 1rem;
    }
  }
`;

const Hero = () => (
  <HeroContainer>
    <Title neon='MERN' flux='Stack' />
    <TitleInfo className='title--info'>
      <H1> Hey, I'm Nanda Gopal. Experienced full stack developer</H1>
      <h3> Check out my portfolio</h3>
      <Link href='/projects' passHref>
        <TitleButton size='large' themeColor='#fff'>
          see my work
        </TitleButton>
      </Link>
    </TitleInfo>
  </HeroContainer>
);
export default Hero;
