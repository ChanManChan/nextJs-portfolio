import styled from 'styled-components';

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: all 0.5s;
  background-color: #000;
  transform: translateY(100%);
  h2 {
    text-transform: uppercase;
    margin: 0;
  }
  p {
    font-size: 1.8rem;
    text-transform: capitalize;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    transition: all 0.5s;
  }
  &:hover ${Caption} {
    transform: translateY(0);
  }
  &:hover img {
    transform: translateY(-30%);
  }
`;

const Image = ({ caption, desc, img_Link, projectName }) => (
  <Container>
    <img src={img_Link} alt={projectName} />
    <Caption>
      <h2>{caption}</h2>
      <p>{desc}</p>
    </Caption>
  </Container>
);

export default Image;
