import { useGetProject } from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import withParent from '@/hoc/withParent';
import Disabled_State from '@/components/styles/Disabled_State';
import Loading from '@/components/styles/Loading';
import { Grid } from '@/components/styles/specific/projects[id]_styles';
import {
  P_TITLE,
  Page_fnc,
  T_STACK,
  P_Desc,
  Deployed_Link,
  REPOS,
  SS_1,
  SS_2,
  SS_3,
  SS_4,
} from '@/components/fragments/projects[id]_fragments';

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
const ProjectDetail = ({ query }) => {
  // const { id } = useRouter().query;
  // const [portfolio, setPortfolio] = React.useState(null);
  //! "useLazyQuery" <- means it will not be executed immediately but it will wait.
  //! "useQuery" <- will be called immediately
  // const [getPortfolio, { loading, data }] = useLazyQuery(GET_PORTFOLIO);
  const { data, loading } = useGetProject({
    variables: { id: query.id },
  });

  const {
    title = '',
    techStack = [],
    description = '',
    deployed = '',
    repoAPI = '',
    repoClient = '',
  } = (data && data.project) || {};

  //! "useEffect" is executed client-side (fetching data through client) <- not the desired way because i'm trying for SSR (fetch the data from server itself).
  // React.useEffect(() => {
  //   getPortfolio({ variables: { id: query.id } });
  // }, []);

  //! We dont need to handle "loading" since our data will be loaded server-side & we dont need to set our state also.
  // if (data && !portfolio) setPortfolio(data.portfolio);
  return (
    <Disabled_State loading={`${loading}`}>
      <Grid>
        <P_TITLE title={title} />
        <Page_fnc />
        <T_STACK techStack={techStack} />
        <P_Desc description={description} />
        <Deployed_Link deployed={deployed} />
        <REPOS repoAPI={repoAPI} repoClient={repoClient} />
        <SS_1 />
        <SS_2 />
        <SS_3 />
        <SS_4 />
      </Grid>
      <Loading msg='Fetching...' loading={`${loading}`} />
    </Disabled_State>
  );
};

ProjectDetail.getInitialProps = ({ query }) => {
  return { query };
};

//! so if you want this page to have SSR (and to be a lambda) for SEO purposes and remove the loading state, add "getDataFromTree" below.

export default withApollo(withParent(ProjectDetail, 'ProjectDetail'), {
  getDataFromTree,
});
