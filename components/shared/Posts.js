import styled, { keyframes } from 'styled-components';

//! For "Data" [img and p container]
const slideDown = keyframes`
   from {
    opacity: 0;
    height: 0;
    padding: 0;
 }
  to {
    opacity: 1;
    height: 30vh;
    padding: 2rem;
 }
`;

//! For "Data > img"

/* "clip-path: inset" <- values are from-top, from-right, from-bottom, from-left */

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

//! For "Data > p"
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
  padding: 0 2rem;
  line-height: 1.5;
  img {
    opacity: 0;
    align-self: flex-start;
    max-width: 100%;
    margin-top: 2rem;
  }
  p {
    opacity: 0;
    margin-top: 2rem;
    flex: 1;
  }
`;

const Summary = styled.summary`
  display: block;
  cursor: pointer;
  padding: 1rem;
  font-size: 2.2rem;
  transition: 0.3s;
  border-bottom: 0.2rem solid;
  user-select: none;
`;

/**
 *  animation: [duration | timing-function | delay | iteration-count | direction | fill-mode | play-state | name]
 *  animation: 3s ease-in 1s 2 reverse both paused slidein;
 */

const Details = styled.details`
  &[open] > ${Summary} {
    color: #f44336;
  }
  @media (min-width: 768px) {
    &[open] > ${Data} > p {
      padding-left: 2rem;
      animation: 0.6s 0.2s forwards ${showContent};
    }
    &[open] > ${Data} {
      animation: 0.3s forwards ${slideDown};
    }
    &[open] > ${Data} > img {
      height: 100%;
      animation: 0.3s 0.15s forwards ${showImage};
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
