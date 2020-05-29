import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import Hero from '@/components/shared/Hero';
import styled from 'styled-components';

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

export default (ChildComponent, r_name) => {
  function CheckLanding(props) {
    if (r_name === 'Home')
      return (
        <>
          <Header />
          <Hero />
          <Inner>
            <ChildComponent {...props} />
          </Inner>
          <Footer />
        </>
      );
    else
      return (
        <>
          <Header />
          <Inner>
            <ChildComponent {...props} />
          </Inner>
        </>
      );
  }

  if (r_name === 'ProjectDetail') {
    CheckLanding.getInitialProps = async (ctx) => {
      const pageProps =
        ChildComponent.getInitialProps &&
        (await ChildComponent.getInitialProps(ctx));
      return { ...pageProps };
    };
  }
  return CheckLanding;
};
