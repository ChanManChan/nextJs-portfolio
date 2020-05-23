import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
   from {
    opacity: 0;
    height: 0;
    padding: 0;
 }
  to {
    opacity: 1;
    height: 30vh;
    padding: 20px;
 }
`;
const showImage = keyframes`
  from {
    opacity: 0;
    clip-path: inset(50% 0 50% 0);
    transform: scale(0.4);
 }
  to {
    opacity: 1;
    clip-path: inset(0 0 0 0);
 }
`;
const showContent = keyframes`
  from {
    opacity: 0;
 }
  to {
    opacity: 1;
 }
`;

const Section = styled.section`
  width: 97%;
  margin: 4rem auto;
`;
const Data = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;
  user-select: none;
  padding: 0 20px;
  line-height: 1.5;
  img {
    align-self: flex-start;
    max-width: 100%;
    margin-top: 20px;
  }
  p {
    flex: 1;
  }
`;

const Summary = styled.summary`
  display: block;
  cursor: pointer;
  padding: 10px;
  font-size: 22px;
  transition: 0.3s;
  border-bottom: 2px solid;
  user-select: none;
`;

const Details = styled.details`
  &[open] > ${Summary} {
    color: red;
  }
  @media (min-width: 768px) {
    &[open] > ${Data} > p {
      opacity: 0;
      animation-name: ${showContent};
      animation-duration: 0.6s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
      margin: 0;
      padding-left: 20px;
    }
    &[open] > ${Data} {
      animation-name: ${slideDown};
      animation-duration: 0.3s;
      animation-fill-mode: forwards;
    }
    &[open] > ${Data} > img {
      opacity: 0;
      height: 100%;
      margin: 0;
      animation-name: ${showImage};
      animation-duration: 0.3s;
      animation-delay: 0.15s;
      animation-fill-mode: forwards;
    }
  }
`;

const Posts = () => (
  <Section>
    <Details open>
      <Summary>Carl Gustav Jung</Summary>
      <Data>
        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/344846/_jung.jpg' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          exercitationem modi placeat fugit quasi minima odio officia,
          necessitatibus ratione sunt possimus.
        </p>
      </Data>
    </Details>
    <Details>
      <Summary>Sigmund Freud</Summary>
      <Data>
        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/344846/_freud.jpg' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          exercitationem modi placeat fugit quasi minima odio officia,
          necessitatibus ratione sunt possimus.
        </p>
      </Data>
    </Details>
    <Details>
      <Summary>Alfred Adler</Summary>
      <Data>
        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/344846/_alfred.jpg' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          exercitationem modi placeat fugit quasi minima odio officia,
          necessitatibus ratione sunt possimus.
        </p>
      </Data>
    </Details>
  </Section>
);

export default Posts;
