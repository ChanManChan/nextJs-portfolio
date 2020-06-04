import styled from 'styled-components';

const Title = styled.p`
  position: absolute;
  top: -2.8rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 0.8rem 0.8rem 0 0;
  text-align: center;
  width: 100%;
  padding: 2rem 0;
  background: ${(p) => p.bdgTheme};
  @media (max-width: 768px) {
    top: -0.5rem;
    padding: 1rem 0px;
    font-size: 1rem;
  }
`;

const Subtitle = styled.p`
  position: absolute;
  top: 5rem;
  font-size: 1.4rem;
  width: 100%;
  text-align: center;
  color: white;
  &:after {
    content: '  ';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    display: block;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: word-spacing 0.3s;
    color: ${(p) => p.bdgTheme};
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    top: 4rem;
    &:after {
      font-size: 0.7rem;
      margin-top: 0.8rem;
    }
  }
`;

const Custom_Badge = styled.div`
  position: relative;
  width: 13.6rem;
  display: inline-block;
  &:hover ${Subtitle}:after {
    word-spacing: 1.5rem;
  }
  @media (max-width: 768px) {
    width: 9rem;
    &:hover ${Subtitle}:after {
      word-spacing: 1rem;
    }
  }
`;

const SVG = styled.svg`
  width: 13.6rem;
  height: 15.2rem;
  @media (max-width: 768px) {
    height: 10.6rem;
    width: 9rem;
  }
`;

const Badge = ({ title, subTitle, bdgTheme }) => (
  <Custom_Badge>
    <SVG
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      x='0px'
      y='0px'
      viewBox='0 0 216 232'
    >
      <path
        fill='#2B2B2B'
        d='M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169    c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z'
      />
    </SVG>
    <Title bdgTheme={bdgTheme}>{title}</Title>
    <Subtitle bdgTheme={bdgTheme}>{subTitle}</Subtitle>
  </Custom_Badge>
);

export default Badge;
