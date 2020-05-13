import styled from 'styled-components';
import { Bg_right, Bg_top, Bg_inner, Bg } from './Cuboid';

const Text = styled.div`
  /* "z-index" <- So that the button text comes up top */
  position: relative;
  z-index: 2;
`;

const Button = styled.button`
  width: 100%;
  display: block;
  padding: 1.4rem 1.6rem;
  background: transparent;
  cursor: ${(p) => (p.disabled ? 'none' : 'pointer')};
  outline: none;
  border: 0;
  color: #fff;
  letter-spacing: 0.1rem;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  position: relative;
  &:hover,
  :focus {
    > ${Bg} {
      > ${Bg_inner} {
        /* Reveal the gradient front face of the button  */
        top: 100%;
      }
    }
  }
  &:disabled {
    background: #9e9e9e;
    color: #eee;
  }
`;

const CustomButton = ({ buttonText, disabled, ...props }) => (
  <Button disabled={disabled} {...props}>
    <Bg_top>
      <Bg_inner />
    </Bg_top>
    <Bg_right>
      <Bg_inner />
    </Bg_right>
    <Bg>
      <Bg_inner />
    </Bg>
    <Text>{buttonText}</Text>
  </Button>
);
export default CustomButton;
