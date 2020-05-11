import Card from '@/components/shared/Card';
import styled from 'styled-components';
import Button from '@/components/shared/ShimmerButton';
import {
  GET_PORTFOLIOS,
  CREATE_PORTFOLIO,
  UPDATE_PORTFOLIO,
  DELETE_PORTFOLIO,
} from '@/apollo/queries';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import Loading from '@/components/styles/Loading';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';

//! Pretend we're making some asynchronous calls
// const apiCall = () => {
// return new Promise((res, rej) => {
// setTimeout(() => {
// res({ testingData: 'Just some testing data from portfolios' });
// }, 200);
//! we need to wait 5s until this data is resolved and this page is displayed
// });
// };

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  grid-row-gap: 3rem;
`;

const Portfolios = () => {
  // debugger;
  const [portfolios, setPortfolios] = React.useState([]);
  const [getPortfolios, { loading, data }] = useLazyQuery(GET_PORTFOLIOS);

  // const [createPortfolio] = useMutation(CREATE_PORTFOLIO, {
  //   onCompleted: (dataC) =>
  //     setPortfolios((cs) => [...cs, dataC.createPortfolio]),
  // });

  const [createPortfolio] = useMutation(CREATE_PORTFOLIO, {
    update(cache, { data: { createPortfolio } }) {
      //! Get old portfolios from cache
      const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS });
      //! Update the cache with the recently created portfolio
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: [...portfolios, createPortfolio] },
      });
    },
  });
  React.useEffect(() => {
    getPortfolios();
  }, []);

  if (
    data &&
    data.portfolios.length > 0 &&
    (portfolios.length === 0 || data.portfolios.length !== portfolios.length)
  )
    setPortfolios(data.portfolios);

  const updatePortfolio = async (id) => {
    const updatedPortfolio = await graphUpdatePortfolio(id);
    const i = portfolios.findIndex((p) => p._id === id);
    const ns = [...portfolios];
    ns[i] = updatedPortfolio;
    setPortfolios(ns);
  };

  const deletePortfolio = async (id) => {
    if (window.confirm(`Permanently Delete Portfolio with ID: ${id}?`)) {
      const deletedId = await graphDeletePortfolio(id);
      const i = portfolios.findIndex((p) => p._id === deletedId);
      const ns = [...portfolios];
      ns.splice(i, 1);
      setPortfolios(ns);
    }
  };

  return (
    <>
      <Button onClick={createPortfolio}>create portfolio</Button>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {portfolios.map((p, i) => {
            return (
              <Card
                key={i}
                id={p._id}
                projectName={p.title}
                techStack={p.techStack}
                projectImage="url('/bg.jpeg')"
                buttonBg={p.theme}
                update={() => updatePortfolio(p._id)}
                remove={() => deletePortfolio(p._id)}
              />
            );
          })}
        </Container>
      )}
    </>
  );
};

//! "getInitialProps" <- is not called in the browser, its called in the server
//! usually with "getInitialProps", we fetch some information from a server (asynchronous call)
// Before the server handles your page to display in a browser, it will call "getInitialProps" and it waits until this function is resolved (so that you will get the data you desire to populate your page with, and then the server will return it to the users )
// Portfolios.getInitialProps = async () => {
// debugger;
// const portfolios = await fetchPortfolios();
// return { portfolios };
// };

//! so if you want this page to have SSR (and to be a lambda) for SEO purposes and remove the loading state, add "getDataFromTree" below.

export default withApollo(Portfolios, { getDataFromTree });
