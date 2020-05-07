import ThemeAnimation from '../styles/Fire';
import styled from 'styled-components';

const HeroContainer = styled.div`
  height: 100vh;
  background-image: url('/mern-stack.jpg');
  background-position: center bottom;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Hero = () => (
  <HeroContainer>
    <ThemeAnimation />
  </HeroContainer>
);
export default Hero;
//  Hey I'm Nanda Gopal. Experienced full stack developer
// Check my portfolio and video tutorials
