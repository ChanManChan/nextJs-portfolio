import styled, { keyframes } from 'styled-components';

const clipRect = keyframes`
 0%, 100% {clip: rect(0px, 110px, 2px, 0px); }
  25% {clip: rect(0px, 2px, 110px, 0px); }
  50% {clip: rect(108px, 110px, 110px, 0px); }
  75% {clip: rect(0px, 110px, 110px, 108px); }
`;

const Logo = styled.div`
  width: 5rem;
  height: 5rem;
  font-size: 4rem;
  margin: 0.5rem;
  position: fixed;
  left: 2rem;
  z-index: 1;
  color: #69ca62;
  background: rgba(0, 0, 0, 0.1) url('/favicon.png') no-repeat center;
  background-size:contain;
  box-shadow: inset 0 0 0 1px rgba(105, 202, 98, 0.5);
  &:before,
  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    z-index: 1;
    margin: -5px;
    box-shadow: inset 0 0 0 0.2rem;
    animation: ${clipRect} 8s linear infinite;
  }
  &:before {
    animation-delay: -4s;
  }
  /* a {
    padding: 0.5rem 1rem;
    background: ${(p) => p.theme.primaryColor};
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
  } */
  @media (max-width: 81.25rem) {
    margin: 0;
    text-align: center;
  }
`;

export default Logo;
