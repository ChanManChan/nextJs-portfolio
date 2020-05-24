import Card from '@/components/shared/Card';
import styled from 'styled-components';
import { useGetProjects } from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import withParent from '@/hoc/withParent';

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

const Projects = () => {
  // debugger;
  //! we dont need state because we are fetching data from server now onwards and rendering the HTML with the fetched data from server-side and sending it to the client.
  // const [portfolios, setPortfolios] = React.useState([]);

  const { data } = useGetProjects();
  const projects = (data && data.projects) || [];
  //! We don't need "useEffect" anymore because the data is fetched from server-side from now onwards.
  // React.useEffect(() => {
  //   getPortfolios();
  // }, []);

  // const [createPortfolio] = useMutation(CREATE_PORTFOLIO, {
  //   onCompleted: (dataC) =>
  //     setPortfolios((cs) => [...cs, dataC.createPortfolio]),
  // });

  // if (
  //   data &&
  //   data.portfolios.length > 0 &&
  //   (portfolios.length === 0 || data.portfolios.length !== portfolios.length)
  // )
  //   setPortfolios(data.portfolios);

  // const updatePortfolio = async (id) => {
  // await graphUpdatePortfolio(id);
  // const updatedPortfolio = await graphUpdatePortfolio(id);
  // const i = portfolios.findIndex((p) => p._id === id);
  // const ns = [...portfolios];
  // ns[i] = updatedPortfolio;
  // setPortfolios(ns);
  // };

  // const deletePortfolio = async (id) => {
  // if (window.confirm(`Permanently Delete Portfolio with ID: ${id}?`)) {
  // await graphDeletePortfolio(id);
  // const deletedId = await graphDeletePortfolio(id);
  // const i = portfolios.findIndex((p) => p._id === deletedId);
  // const ns = [...portfolios];
  // ns.splice(i, 1);
  // setPortfolios(ns);
  // }
  // };

  //! Todo:- later Redirect for updation and deletion
  //UPDATE:-updatePortfolio({ variables: { id: p._id } })

  return (
    <Container>
      {projects.map((p, i) => {
        return (
          <Card
            key={i}
            id={p._id}
            projectName={p.title}
            techStack={p.techStack}
            projectImage="url('/bg.jpeg')"
            buttonBg={p.theme}
            update={() => {}}
            remove={() => {}}
          />
        );
      })}
    </Container>
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

export default withApollo(withParent(Projects), { getDataFromTree });
