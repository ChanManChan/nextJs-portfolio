import styled from 'styled-components';

const Button = styled.button.attrs((props) => ({
  disabled: props.loading === 'true' ? true : false,
}))`
  width: 100%;
  height: 6rem;
  margin-bottom: 4rem;
  text-decoration: none;
  text-transform: uppercase;
  background-color: transparent;
  text-align: center;
  line-height: 6rem;
  border: none;
  font-weight: bold;
  letter-spacing: 0.2rem;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: all 0.2s;
  color: ${(p) => p.theme.bodyBackgroundColor};
  &:before {
    content: '';
    position: absolute;
    top: -0.3rem;
    left: -0.3rem;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #20caff;
    mix-blend-mode: multiply;
    transition: all 0.2s;
    transform-origin: top;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #ff7675;
    mix-blend-mode: multiply;
    transition: all 0.2s;
    transform-origin: bottom;
  }
  &:hover:before {
    top: -6px;
    left: 0;
    transform: perspective(100rem) rotateX(75deg);
  }
  &:hover:after {
    top: 6px;
    left: 0;
    transform: perspective(100rem) rotateX(-75deg);
  }
  &:hover {
    color: ${(p) => p.theme.bodyFontColor};
  }
  &:disabled {
    background: #eee;
    color: #666;
    cursor: none;
    pointer-events: none;
  }
`;

export default Button;
