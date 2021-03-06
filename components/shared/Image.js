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
  text-align: center;
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

const Dialog = styled.dialog`
  box-shadow: 0 0.8rem 0.6rem -0.6rem #000;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Image = ({
  caption,
  desc,
  img_Link,
  altName,
  handleShowDialog,
  openDialog = false,
}) => (
  <>
    <Container>
      <img src={img_Link} alt={altName} onClick={handleShowDialog} />
      <Caption>
        <h2 style={{ fontSize: '1.5rem' }}>{caption}</h2>
        <p style={{ fontSize: '1.2rem' }}>{desc}</p>
      </Caption>
    </Container>
    {openDialog && (
      <Dialog open>
        <img
          src={img_Link}
          alt={altName}
          style={{ width: '50vw' }}
          onClick={handleShowDialog}
        />
      </Dialog>
    )}
  </>
);

export default Image;
