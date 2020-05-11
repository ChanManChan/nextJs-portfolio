import styled from 'styled-components';

const Anchor = styled.a`
  text-decoration: none;
  position: relative;
  overflow: hidden;
  padding: 0.2rem;
  &:before {
    font-family: 'Font Awesome 5 Free';
    font-size: 2.5rem;
    font-weight: 900;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${(p) => p.theme.secondaryColor};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(5);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }
  &:hover:before {
    transform: scale(1);
    opacity: 1;
  }
`;

export default Anchor;
