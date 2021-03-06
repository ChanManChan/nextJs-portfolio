import styled, { css } from 'styled-components';
import { BP } from './forms[S_Input]_media';

export const Footer = styled.footer`
  padding: 2rem 0;
  position: fixed;
  z-index: 1;
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

const iterateMedia = () => {
  let styles = '';
  for (let i = 0; i < BP.media.length; i++)
    if (BP.media[i].bp === 767)
      styles += `
      @media (max-width: ${BP.media[i].bp}px) {
        left: ${BP.media[i].left1}%;
        bottom: -1.8rem;
        padding: 0.75rem 1.75rem;
        font-size: 1.1rem;
        &:last-of-type {
          left: ${BP.media[i].left2}%;
        }
      }
      `;
    else
      styles += `
      @media (max-width: ${BP.media[i].bp}px) {
        left: ${BP.media[i].left1}%;
        &:last-of-type {
          left: ${BP.media[i].left2}%;
        }
      }
      `;
  return css`
    ${styles}
  `;
};

export const Container = styled.div`
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
      transform: translateX(0) translateY(0);
    }
  }
  .dropzone{
    margin:0 3rem;
     .dropzone--btn{
       margin-bottom:1rem;
     }
  }
`;
//The touch-action CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
//"touch-action: manipulation" <- Enable panning and pinch zoom gestures, but disable additional non-standard gestures such as double-tap to zoom.

/*important to override chrome's yellow background and black text autofill */
/* &:-webkit-autofill {
    background-color: transparent !important;
    box-shadow: 0 0 0 100rem #0ea8ec inset;
    -webkit-box-shadow: 0 0 0 100rem #0ea8ec inset;
    -webkit-text-fill-color: #fff !important;
  } */

export const Input = styled.input.attrs((props) => ({
  placeholder: props.helperText ? props.helperText : props.placeholder,
  disabled: props.loading === 'true' ? true : false,
}))`
  height: 5rem;
  font-size: 3rem;
  padding: 0.65rem 1.2rem;
  border: 0.4rem solid #fff;
  margin: 1rem 3rem;
  background-color: transparent !important;
  appearance: none;
  color: #fff;
  transition: all 0.3s ease;
  touch-action: manipulation;
  &::placeholder {
    color: ${(p) => (p.helperText ? '#f00' : '#fff')};
  }
  &:focus {
    outline: 0;
    border: 0.6rem solid ${(p) => p.theme.primaryColor};
  }
  @media (max-width: 600px) {
    padding: 0.4rem 0.8rem;
    font-size: 2.1rem;
    border: 0.2rem solid #fff;
    &:focus {
      outline: 0;
      border: 0.3rem solid ${(p) => p.theme.primaryColor};
    }
  }
  @media (max-width: 440px) {
    height: 3.5rem;
  }
`;

export const Button = styled.button`
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
  left: 3.25%;
  &:last-of-type {
    left: 12.5%;
  }
  &:hover {
    border: 0.6rem solid ${(p) => p.theme.primaryColor};
  }
  ${iterateMedia()}
`;

export const RES_TO = styled.div`
  margin: 1rem 3rem;
  padding: 0.65rem 1.2rem;
  p {
    color: ${(p) => p.theme.staticColor1};
    font-weight: bold;
    span {
      margin-left: 1rem;
      color: ${(p) => p.theme.quaternaryColor};
    }
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    white-space: nowrap;
  }
  @media (max-width: 425px) {
    p {
      span {
        display: block;
        margin-left: 0;
      }
    }
  }
`;
