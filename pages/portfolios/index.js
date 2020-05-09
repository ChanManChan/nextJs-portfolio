import Card from '../../components/shared/Card';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

//! Pretend we're making some asynchronous calls
const apiCall = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ testingData: 'Just some testing data from portfolios' });
    }, 200);
    //! we need to wait 5s until this data is resolved and this page is displayed
  });
};

const Portfolios = (props) => {
  // debugger;
  return (
    <Container>
      <Card
        projectName='Social Network'
        techStack='MERN'
        projectImage="url('/bg.jpeg')"
        buttonBg='#DA4D1D'
      />
      <Card
        projectName='E-commerce'
        techStack='MERN'
        projectImage="url('/favicon.png')"
        buttonBg=' #2b26c3'
      />
    </Container>
  );
};

//! "getInitialProps" <- is not called in the browser, its called in the server
//! usually with "getInitialProps", we fetch some information from a server (asynchronous call)
// Before the server handles your page to display in a browser, it will call "getInitialProps" and it waits until this function is resolved (so that you will get the data you desire to populate your page with, and then the server will return it to the users )
Portfolios.getInitialProps = async () => {
  // debugger;
  const data = await apiCall();
  return { ...data };
};
export default Portfolios;
