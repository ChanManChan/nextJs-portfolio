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

const checkLanding = (R_Child, comp_Name, childProps) => {
  if (comp_Name === 'Home')
    return (
      <>
        <Header />
        <Hero />
        <Inner>
          <R_Child {...childProps} />
        </Inner>
        <Footer />
      </>
    );
  else
    return (
      <>
        <Header />
        <Inner>
          <R_Child {...childProps} />
        </Inner>
      </>
    );
};

export default (ChildComponent, r_name) => (props) => {
  return checkLanding(ChildComponent, r_name, props);
};
