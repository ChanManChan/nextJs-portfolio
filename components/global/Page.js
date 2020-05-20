import Meta from './Meta';
import GlobalStyle from '../styles/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import LightTheme from '@/components/styles/themes/light';
import DarkTheme from '@/components/styles/themes/dark';

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
    <ThemeProvider theme={providerValue}>
      <GlobalStyle />
      <StyledPage>
        <Meta />
        {children}
      </StyledPage>
    </ThemeProvider>
  );
}
