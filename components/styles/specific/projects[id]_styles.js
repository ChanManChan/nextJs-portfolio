import styled from 'styled-components';

export const Border = styled.div`
  background: ${(p) => p.theme.bodyBackgroundColor};
  color: ${(p) => p.theme.bodyFontColor};
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  bottom: 0.2rem;
  left: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  margin: -10rem auto 5rem;
  grid: 15rem repeat(9, 13rem) / repeat(4, 1fr);
  & > * > ${Border} {
    will-change: background, color;
    transition: background 0.25s ease, color 0.25s ease;
    &:hover {
      background: ${(p) => p.theme.secondaryColor};
      color: #ffff63;
    }
  }
  .border {
    position: relative;
    background: ${(p) => p.theme.bg_gradient};
  }
  @media (max-width: 768px) {
    grid: unset;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(25rem, auto);
  }
`;

export const H1 = styled.h1`
  font-size: 3.5rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Title = styled.div`
  grid-area: 3 / 2 / 5 / 4;
  display: flex;
  margin-top: -1rem;
  justify-content: center;
  position: relative;
  z-index: 1;
  p {
    text-transform: uppercase;
    margin-top: 0.25rem;
    line-height: 1.5;
    display: inline-block;
    span {
      border-radius: 0.3rem;
      font-size: 2.3rem;
      color: ${(p) => p.theme.bodyFontColor};
      background: ${(p) => p.theme.bodyBackgroundColor};
      padding: 0.5rem 1rem;
      letter-spacing: 0.1rem;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Stack = styled.div`
  grid-area: 3 / 1 / 6 / 3;
  > ${Border} {
    justify-content: space-evenly;
  }
  @media (max-width: 768px) {
    grid-area: unset;
    grid-column: 1/-1;
    ${Border} {
      bottom: 0;
    }
  }
`;

export const Description = styled.div`
  grid-area: 3 / 3 / 7 / 5;
  font-size: 4rem;
  > ${Border} {
    left: 0;
  }
  @media (max-width: 768px) {
    grid-area: unset;
    grid-column: 1/-1;
    font-size: 2.2rem;
    ${Border} {
      left: 0.2rem;
    }
  }
`;

export const Deployed = styled.div`
  grid-area: 6 / 1 / 8 / 2;
  > ${Border} {
    top: 0;
  }
  @media (max-width: 768px) {
    grid-area: unset;
    grid-column: 1/-1;
  }
`;

export const Repository = styled.div`
  grid-area: 6 / 2 / 8 / 3;
  > ${Border} {
    flex-direction: column;
    justify-content: space-evenly;
    left: 0;
    top: 0;
  }
  @media (max-width: 768px) {
    grid-area: unset;
    grid-column: 1/-1;
    ${Border} {
      left: 0.2rem;
    }
  }
`;

export const ProjectTitle = styled.div`
  grid-area: 1 / 1 / 3 / 5;
  justify-self: center;
  align-self: center;
  @media (max-width: 768px) {
    grid-area: unset;
    grid-column: 1/-1;
    text-align: center;
  }
`;

export const Screenshot1 = styled.div`
  grid-area: 7/ 3 / 9 / 4;
  > ${Border} {
    bottom: 0;
    top: 0;
    left: 0;
  }
  @media (max-width: 768px) {
    grid-area: unset;
    grid-column: 1/-1;
    ${Border} {
      left: 0.2rem;
    }
  }
`;

export const Screenshot2 = styled.div`
  grid-area: 7 / 4 / 11 / 5;
  > ${Border} {
    top: 0;
    left: 0;
  }
  @media (max-width: 768px) {
    grid-area: unset;
    grid-column: 1/-1;
    ${Border} {
      top: 0.2rem;
      left: 0.2rem;
    }
  }
`;

export const Screenshot3 = styled.div`
  grid-area: 8 / 1 / 11 / 3;
  > ${Border} {
    top: 0;
  }
  @media (max-width: 768px) {
    grid-area: unset;
    grid-column: 1/-1;
    ${Border} {
      bottom: 0rem;
    }
  }
`;

export const Screenshot4 = styled.div`
  grid-area: 9 / 3 / 11 / 4;
  > ${Border} {
    left: 0;
  }
  @media (max-width: 768px) {
    grid-area: unset;
    grid-column: 1/-1;
    ${Border} {
      left: 0.2rem;
    }
  }
`;
