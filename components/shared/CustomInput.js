import styled from 'styled-components';
import { Bg_right, Bg_top, Bg_inner, Bg } from './Cuboid';

const Input = styled.input`
  width: 100%;
  padding: 1.4rem 1.6rem;
  border: 0;
  background: transparent;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.05rem;
  font-size: 1.6rem;
  &:hover,
  &:focus {
    outline: none;
    border: 0;
  }
  position: relative;
  /*"z-index" <- So that the input comes up top */
  z-index: 2;
  &:focus ~ ${Bg_right} > ${Bg_inner}, &:focus ~ ${Bg_top} > ${Bg_inner} {
    /* Cover the top and right face of the cuboid when focused */
    /* Increase the top thickness of "Bg_inner" to cover the face*/
    top: 100%;
    background: rgba(255, 255, 255, 0.5);
  }
`;

const Control = styled.div`
  /*margin: top | right & left | bottom  */
  margin: 0 0 3rem;
  position: relative;
  > ${Bg_top},> ${Bg_right},> ${Bg} {
    /* Grey outline color for the input boxes */
    background: rgba(255, 255, 255, 0.5);
    /* Light grey glow transition when hovering over */
    transition: background 0.2s ease-in-out;
  }
  > ${Bg_top},> ${Bg_right} {
    > ${Bg_inner} {
      /* top: 100%; smooth transition (top and right side of the Cuboid) */
      transition: all 0.2s ease-in-out;
    }
  }
  &:hover,
  &:focus {
    > ${Bg_top},> ${Bg_right},> ${Bg} {
      /* Light grey glow */
      background: rgba(255, 255, 255, 0.8);
    }
  }
`;

const InputField = ({ ...props }) => (
  <Control>
    <Input {...props} />
    <Bg_top>
      <Bg_inner />
    </Bg_top>
    <Bg_right>
      <Bg_inner />
    </Bg_right>
    <Bg>
      <Bg_inner />
    </Bg>
  </Control>
);
export default InputField;
