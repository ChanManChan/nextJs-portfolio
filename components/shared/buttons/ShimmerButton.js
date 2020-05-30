import styled, { css } from 'styled-components';

const sizeStyles = ({ size }) => {
  if (size === 'large')
    return css`
      padding: 2rem 4rem;
      border: 0.3rem solid
        ${(p) => (p.autoTheme ? p.theme.bodyFontColor : p.themeColor)};
      font-size: 2rem;
    `;
  else if (size === 'medium')
    return css`
      padding: 1.5rem 2.5rem;
      border: 0.25rem solid
        ${(p) => (p.autoTheme ? p.theme.bodyFontColor : p.themeColor)};
      font-size: 1.5rem;
    `;
  else
    return css`
      padding: 1rem 2rem;
      border: 0.15rem solid
        ${(p) => (p.autoTheme ? p.theme.bodyFontColor : p.themeColor)};
      font-size: 1rem;
    `;
};

const Button = styled.a`
  display: inline-block;
  text-transform: capitalize;
  text-decoration: none;
  color: ${(p) => (p.autoTheme ? p.theme.bodyFontColor : p.themeColor)};
  font-family: inherit;
  ${sizeStyles}
  transition: background-color 0.3s, color 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${(p) => p.theme.primaryColor};
    color: ${(p) => p.theme.secondaryColor};
  }
  &:before {
    content: '';
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 130%;
    height: 50%;
    transform: translate(-100%, 50%) rotate(45deg);
    transition: transform 0.3s;
  }
  &:hover:before {
    transform: translate(100%, 50%) rotate(45deg);
  }
`;

export default Button;
