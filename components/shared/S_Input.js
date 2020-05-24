import styled, { css } from 'styled-components';

const Footer = styled.footer`
  padding: 2rem 0;
  position: fixed;
  bottom: -100%;
  left: 10%;
  right: 10%;
  background-color: transparent;
  transition: bottom 0.3s ease-in-out;
  &.active {
    bottom: 2rem;
  }
`;

const shared = css`
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
  padding: 4rem 2rem;
  position: relative;
  &:before {
    ${shared}
    z-index: -1;
    background: transparent;
    transform: translateX(-4.5rem) translateY(-5rem);
    border: 0.6rem solid ${(p) => p.theme.primaryColor};
  }
  &:after {
    ${shared}
    background: ${(p) => p.theme.tertiaryColor};
    z-index: -2;
    transform: translateX(-2rem) translateY(-2.25rem);
  }
  &:focus-within {
    background: ${(p) => p.theme.tertiaryColor};
    &:before {
      width: 0%;
      height: 0%;
      transform: translatex(0px) translatey(0px);
    }
  }
`;

const Field = styled.div`
  display: flex;
  flex-flow: column-reverse;
  margin: 1rem 3rem;
`;

const Input = styled.input`
  padding: 1.45rem 2rem;
  border: 0.4rem solid #fff;
  margin: 0 1.5rem;
  background-color: transparent !important;
  appearance: none;
  color: #fff;
  transition: all 0.3s ease;
  touch-action: manipulation;
  /*important to override chrome's yellow background and black text autofill */
  &:-webkit-autofill {
    background-color: transparent !important;
    -webkit-box-shadow: 0 0 0px 1000px #0ea8ec inset;
    box-shadow: 0 0 0px 1000px #0ea8ec inset;
    -webkit-text-fill-color: white !important;
  }
  &::placeholder {
    color: #fff;
  }
  &:focus {
    font-weight: bold;
    outline: 0;
    border: 0.6rem solid ${(p) => p.theme.primaryColor};
  }
  &::-webkit-input-placeholder {
    opacity: 1;
    transition: inherit;
  }
  &:focus::-webkit-input-placeholder {
    opacity: 0;
  }
`;

//The touch-action CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
//"touch-action: manipulation" <- Enable panning and pinch zoom gestures, but disable additional non-standard gestures such as double-tap to zoom.

const Label = styled.label`
  transition: all 0.3s ease;
  touch-action: manipulation;
  opacity: 0;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem 2.5rem;
  background-color: ${(p) => p.theme.staticColor2};
  color: #fff;
  font-size: 1.45rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: all 0.3s ease;
  position: absolute;
  bottom: -2.8rem;
  left: 4.25%;
  &:last-of-type {
    left: 12.75%;
  }
  &:hover {
    border: 0.6rem solid ${(p) => p.theme.primaryColor};
  }
`;

const FooterInput = () => (
  <Footer className='slide-footer'>
    <Form>
      <Field>
        <Input placeholder='Topic title' />
        <Label />
      </Field>
      <Field>
        <Input placeholder='Details...' />
        <Label />
      </Field>
      <Button type='submit'>Reply</Button>
      <Button type='button'>Cancel</Button>
    </Form>
  </Footer>
);

export default FooterInput;
