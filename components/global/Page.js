import Hero from '../shared/Hero';
import Footer from './Footer';
import Meta from './Meta';
import Header from './Header';
import GlobalStyle from '../styles/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import LightTheme from '@/components/styles/themes/light';
import DarkTheme from '@/components/styles/themes/dark';
import { ToastContainer } from 'react-toastify';

const Inner = styled.main`
  max-width: 120rem;
  margin: 15rem auto 0 auto;
  padding: 0 1rem;
  font-family: 'Open Sans', sans-serif;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Press Start 2P', cursive;
  }
`;

const StyledPage = styled.div`
  background: ${(p) => p.theme.bodyBackgroundColor};
  color: ${(p) => p.theme.bodyFontColor};
`;

export default function Page({ children, c_Name }) {
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
  const checkLanding = (r_Child, comp_Name) => {
    if (comp_Name === 'Home')
      return (
        <>
          <Hero />
          <Inner>{r_Child}</Inner>
          <Footer />
        </>
      );
    else return <Inner>{r_Child}</Inner>;
  };
  return (
    <ThemeProvider theme={providerValue}>
      <GlobalStyle />
      <ToastContainer />
      <StyledPage>
        <Meta />
        <Header />
        {checkLanding(children, c_Name)}
      </StyledPage>
    </ThemeProvider>
  );
}
