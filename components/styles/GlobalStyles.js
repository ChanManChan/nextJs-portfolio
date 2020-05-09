import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  font-size: 62.5%;
}
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body{
  padding:0;
  margin:0;
  font-size:1.5rem;
  font-family: 'Open Sans', sans-serif;
  background:${(p) => p.theme.bodyBackgroundColor};
  color:${(p) => p.theme.bodyFontColor};
  min-height:100vh;
}
`;

export default GlobalStyle;
