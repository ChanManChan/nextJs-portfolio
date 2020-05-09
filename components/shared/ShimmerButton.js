import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  text-transform: capitalize;
  text-decoration: none;
  color: #fff;
  font-family: inherit;
  font-size: 2rem;
  border: 0.3rem solid #fff;
  padding: 2rem 4rem;
  transition: background-color 0.3s, color 0.3s;
  position: relative;
  overflow: hidden;
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
    width: 100%;
    height: 5rem;
    transform: translateX(-100%) rotate(45deg);
    transition: transform 0.3s;
  }
  &:hover:before {
    transform: translateX(100%) rotate(45deg);
  }
`;
export default Button;
