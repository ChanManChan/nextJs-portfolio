import Meta from './Meta';
import Header from './Header';
import GlobalStyle from '../styles/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import LightTheme from '../styles/themes/light';
import DarkTheme from '../styles/themes/dark';

const Inner = styled.main`
  max-width: 110rem;
  margin: 15rem auto 0 auto;
  padding: 0 1rem;
  font-family: 'Open Sans', sans-serif;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Kaushan Script', cursive;
  }
`;
const StyledPage = styled.div`
  background: ${(p) => p.theme.bodyBackgroundColor};
  color: ${(p) => p.theme.bodyFontColor};
`;

export default function Page({ children }) {
  const [theme, setTheme] = React.useState(LightTheme);

  const providerValue = React.useMemo(
    () => ({
      ...theme,
      toggleTheme: () => {
        setTheme((s) => (s.id === 'light' ? DarkTheme : LightTheme));
      },
    }),
    [theme, setTheme]
  );

  return (
    <>
      <ThemeProvider theme={providerValue}>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{children}</Inner>
        </StyledPage>
      </ThemeProvider>
    </>
  );
}
