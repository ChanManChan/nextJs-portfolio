import styled from 'styled-components';

const Label = styled.label.attrs((props) => ({ htmlFor: props.att }))`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 28rem;
  border-radius: 0.3rem;
  overflow: hidden;
  &.caption {
    grid-row: 2/3;
  }
  &.description {
    grid-row: 3/4;
  }
`;

const Placeholder = styled.span`
  position: absolute;
  top: 1.2rem;
  left: 0.8rem;
  font-size: 1.3rem;
  color: ${(p) => p.theme.bodyFontColor};
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
`;

const Focus = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
`;

const Input = styled.input.attrs((props) => ({ id: props.att }))`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  border: 0;
  padding: 1rem 0.8rem 0;
  height: 4rem;
  font-size: 1.5rem;

  background: rgba(0, 0, 0, 0.02);
  box-shadow: inset 0 -0.1rem 0 rgba(0, 0, 0, 0.3);
  color: ${(p) => p.theme.bodyFontColor};
  transition: all 0.15s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
    box-shadow: inset 0 -0.1rem 0 rgba(0, 0, 0, 0.5);
  }
  &:valid {
    & + ${Placeholder} {
      color: rgba(0, 0, 0, 0.5);
      transform: translate3d(0, -1.2rem, 0) scale(0.75);
    }
  }
  &:focus {
    background: rgba(0, 0, 0, 0.05);
    outline: none;
    box-shadow: inset 0 -0.1rem 0 #0077ff;
    & + ${Placeholder} {
      color: #0077ff;
      transform: translate3d(0, -1.2rem, 0) scale(0.75);
      & + ${Focus} {
        transform: scaleX(1);
        transition: all 0.3s ease;
      }
    }
  }
`;

const Img_input = ({ className, ...props }) => {
  const ID = '' + Math.random();
  return (
    <Label className={className} att={ID}>
      <Input {...props} att={ID} required />
      <Placeholder>{className}</Placeholder>
      <Focus />
    </Label>
  );
};

export default Img_input;

export const ThumbsContainer = styled.aside`
  display: flex;
  flex-flow: row wrap;
  margin-top: 1rem;
`;

export const Thumb = styled.div`
  display: inline-flex;
  border-radius: 0.2rem;
  border: 0.1rem solid ${(p) => p.theme.staticColor2};
  margin: -2rem 1rem 3rem;
  width: 20rem;
  padding: 0.4rem;
`;

export const ThumbInner = styled.div`
  display: grid;
  grid-template-rows: 2fr repeat(2, 4rem);
`;

export const Image = styled.img`
  grid-row: 1/2;
  width: 100%;
`;
