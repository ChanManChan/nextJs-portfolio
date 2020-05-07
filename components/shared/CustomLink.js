import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${(p) => (p.isActive ? '#fff' : p.theme.secondaryColor)};
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  position: relative;
  transition: all 0.5s;
  &:hover {
    background-color: ${(p) => p.theme.primaryColor};
    color: #fff;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 1.2rem;
    left: 1.2rem;
    width: 1.2rem;
    height: 1.2rem;
    border: 0.3rem solid ${(p) => p.theme.primaryColor};
    border-width: 0 0 0.3rem 0.3rem;
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover:before {
    opacity: 1;
    bottom: -0.8rem;
    left: -0.8rem;
  }
  &:after {
    content: '';
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    width: 1.2rem;
    height: 1.2rem;
    border: 0.3rem solid ${(p) => p.theme.primaryColor};
    border-width: 0.3rem 0.3rem 0 0;
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover:after {
    opacity: 1;
    top: -0.8rem;
    right: -0.8rem;
  }
`;
const CustomLink = ({ href, isActive, children }) => (
  <Link href={href} passHref>
    <StyledLink isActive={isActive}>{children}</StyledLink>
  </Link>
);

export default CustomLink;
