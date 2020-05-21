import Link from 'next/link';
import styled, { css } from 'styled-components';

const checkJustify = ({ justify }) => {
  if (justify === 'start')
    return css`
      justify-self: start;
    `;
  else if (justify === 'end')
    return css`
      justify-self: end;
    `;
};

const shared = css`
  content: '';
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  border: 0.3rem solid ${(p) => p.theme.primaryColor};
  opacity: 0;
  transition: all 0.3s;
`;

const StyledLink = styled.a`
  color: ${(p) => (p.isActive ? '#fff' : p.theme.staticColor2)};
  font-size: 2rem;
  text-decoration: ${(p) =>
    p.signOut ? `solid underline ${p.theme.staticColor2} 2px` : 'none'};
  text-transform: ${(p) => (p.username ? 'capitalize' : 'uppercase')};
  padding: 0.5rem 1rem;
  margin: 0 1.5rem;
  ${checkJustify}
  position: relative;
  transition: all 0.5s;
  white-space: nowrap;
  &:hover {
    background-color: ${(p) => p.theme.primaryColor};
    color: ${(p) => p.theme.staticColor3};
  }
  &:before {
    ${shared}
    bottom: 1.2rem;
    left: 1.2rem;
    border-width: 0 0 0.3rem 0.3rem;
  }
  &:hover:before {
    opacity: 1;
    bottom: -0.8rem;
    left: -0.8rem;
  }
  &:after {
    ${shared}
    top: 1.2rem;
    right: 1.2rem;
    border-width: 0.3rem 0.3rem 0 0;
  }
  &:hover:after {
    opacity: 1;
    top: -0.8rem;
    right: -0.8rem;
  }
`;
const CustomLink = ({
  href,
  isActive,
  children,
  username,
  signOut,
  justify,
  as,
}) => (
  <Link href={href} as={as} passHref>
    <StyledLink
      isActive={isActive}
      username={username}
      signOut={signOut}
      justify={justify}
    >
      {children}
    </StyledLink>
  </Link>
);

export default CustomLink;
