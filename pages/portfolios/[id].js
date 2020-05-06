import React from 'react';
import { useRouter } from 'next/router';

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

//! 3rd method:- getInitialProps on a functional component
const PortfolioDetail = ({ query }) => {
  const { id } = query;
  return <h1>I'm detail page with ID: {id}</h1>;
};

PortfolioDetail.getInitialProps = ({ query }) => {
  return { query };
};

export default PortfolioDetail;
