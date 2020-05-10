import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

//! 1st method:- Functional component without getInitialProps
// const PortfolioDetail = () => {
//   const { id } = useRouter().query;
//   return <h1>I'm detail page with ID: {id}</h1>;
// };

//! 2nd method:- For class component, how to extract the query parameter from URL?
// class PortfolioDetail extends React.Component {
//? whatever i return from this "getInitialProps" function, they will be provided as props to this class component
//? "getInitialProps" function is called on a server, it will extract the "URL" parameter and it will provide it to the class component
// getInitialProps <- is called on a server
//   static getInitialProps({ query }) {
// what you return here will get into this.props
//     return { query, test: 'Hello NandaGopal', num: 4 + 4 };
//   }
//   render() {
//! "const { id } = useRouter().query;" will not work in a class component
//     const id = this.props.query.id;
//     return (
//       <h1>
//         I'm detail page with ID: {id} {this.props.test}
//         {this.props.num}
//       </h1>
//     );
//   }
// }

const Border = styled.div`
  background: ${(p) => p.theme.gridColor};
  color: ${(p) => p.theme.secondaryColor};
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  bottom: 0.2rem;
  left: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  margin: -10rem auto 5rem;
  grid: 15rem repeat(9, 13rem) / repeat(4, 1fr);
  & > * > ${Border} {
    will-change: background, color;
    transition: background 0.25s ease, color 0.25s ease;
    &:hover {
      background: ${(p) => p.theme.secondaryColor};
      color: #ffff63;
    }
  }
`;

const ProjectTitle = styled.div`
  grid-area: 1 / 1 / 3 / 5;
  justify-self: center;
  align-self: center;
  font-size: 2.2rem;
`;
const Stack = styled.div`
  position: relative;
  background: ${(p) => p.theme.bg_gradient};
  grid-area: 3 / 1 / 6 / 3;
  > ${Border} {
    right: 0;
  }
`;
const Description = styled.div`
  position: relative;
  background: ${(p) => p.theme.bg_gradient};
  grid-area: 3 / 3 / 7 / 5;
`;
const Deployed = styled.div`
  position: relative;
  background: ${(p) => p.theme.bg_gradient};
  grid-area: 6 / 1 / 8 / 2;
  > ${Border} {
    top: 0;
  }
`;

const Repository = styled.div`
  grid-area: 6 / 2 / 8 / 3;
  position: relative;
  background: ${(p) => p.theme.bg_gradient};
  > ${Border} {
    left: 0;
    right: 0;
    top: 0;
  }
`;
const Screenshot1 = styled.div`
  grid-area: 7/ 3 / 9 / 4;
  position: relative;
  background: ${(p) => p.theme.bg_gradient};
  > ${Border} {
    bottom: 0;
    right: 0;
    top: 0;
  }
`;
const Screenshot2 = styled.div`
  background: ${(p) => p.theme.bg_gradient};
  position: relative;
  grid-area: 7 / 4 / 11 / 5;
  > ${Border} {
    top: 0;
  }
`;
const Screenshot3 = styled.div`
  background: ${(p) => p.theme.bg_gradient};
  position: relative;
  grid-area: 8 / 1 / 11 / 3;
  > ${Border} {
    right: 0;
    top: 0;
  }
`;
const Screenshot4 = styled.div`
  background: ${(p) => p.theme.bg_gradient};
  position: relative;
  grid-area: 9 / 3 / 11 / 4;
  > ${Border} {
    right: 0;
  }
`;
const Title = styled.div`
  grid-area: 3 / 2 / 5 / 4;
  display: flex;
  margin-top: -1rem;
  justify-content: center;
  position: relative;
  z-index: 1;
  p {
    text-transform: uppercase;
    margin-top: 0.25rem;
    line-height: 1.5;
    display: inline-block;
    span {
      border-radius: 0.3rem;
      font-size: 2.3rem;
      color: ${(p) => p.theme.secondaryColor};
      background: ${(p) => p.theme.gridColor};
      padding: 0.5rem 1rem;
      letter-spacing: 0.1rem;
    }
  }
`;

//! 3rd method:- getInitialProps on a functional component
const PortfolioDetail = ({ query }) => {
  console.log('USE ROUTER: ', useRouter().query);
  const { id } = query;
  return (
    <Grid>
      <ProjectTitle>
        <h1>Testing title</h1>
      </ProjectTitle>
      <Title>
        <p>
          <span>details</span>
        </p>
      </Title>
      <Stack>
        <Border />
      </Stack>
      <Description>
        <Border />
      </Description>
      <Deployed>
        <Border />
      </Deployed>
      <Repository>
        <Border />
      </Repository>
      <Screenshot1>
        <Border />
      </Screenshot1>
      <Screenshot2>
        <Border />
      </Screenshot2>
      <Screenshot3>
        <Border />
      </Screenshot3>
      <Screenshot4>
        <Border />
      </Screenshot4>
    </Grid>
  );
};

PortfolioDetail.getInitialProps = ({ query }) => {
  return { query };
};

export default PortfolioDetail;
