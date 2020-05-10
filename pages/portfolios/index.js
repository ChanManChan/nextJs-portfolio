import Card from '@/components/shared/Card';
import styled from 'styled-components';
import axios from 'axios';

//! Pretend we're making some asynchronous calls
// const apiCall = () => {
// return new Promise((res, rej) => {
// setTimeout(() => {
// res({ testingData: 'Just some testing data from portfolios' });
// }, 200);
//! we need to wait 5s until this data is resolved and this page is displayed
// });
// };

const fetchPortfolios = () => {
  const query = `
  query Portfolios {
    portfolios {
     _id
      title
      techStack
      repoAPI
      repoClient
      deployed
      description
      theme
    }
  }`;
  return axios
    .post('http://localhost:3000/graphql', { query })
    .then(({ data: graph }) => {
      // debugger;
      return graph.data;
    })
    .then((data) => {
      // debugger;
      return data.portfolios;
    });
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  grid-row-gap: 3rem;
`;

const Portfolios = (props) => {
  // debugger;
  return (
    <Container>
      {props.portfolios.map((p, i) => {
        return (
          <Card
            key={i}
            id={p._id}
            projectName={p.title}
            techStack={p.techStack}
            projectImage="url('/bg.jpeg')"
            buttonBg={p.theme}
          />
        );
      })}
    </Container>
  );
};

//! "getInitialProps" <- is not called in the browser, its called in the server
//! usually with "getInitialProps", we fetch some information from a server (asynchronous call)
// Before the server handles your page to display in a browser, it will call "getInitialProps" and it waits until this function is resolved (so that you will get the data you desire to populate your page with, and then the server will return it to the users )
Portfolios.getInitialProps = async () => {
  // debugger;
  const portfolios = await fetchPortfolios();
  return { portfolios };
};

export default Portfolios;
