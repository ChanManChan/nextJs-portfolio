import styled from 'styled-components';
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import withParent from '@/hoc/withParent';
import { useRouter } from 'next/router';
import Card from '@/components/shared/Card';
import Button from '@/components/shared/ShimmerButton';
import { useGetUserPortfolios, useDeletePortfolio } from '@/apollo/actions';
import { getDataFromTree } from '@apollo/react-ssr';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  grid-row-gap: 3rem;
`;

const PageFunction = styled.h1`
  margin: 0 0 4rem;
  font-size: 3rem;
`;

const InstructorDashboard = () => {
  const { data } = useGetUserPortfolios();
  const [deletePortfolio] = useDeletePortfolio();
  const userPortfolios = (data && data.userPortfolios) || [];
  const router = useRouter();

  return (
    <>
      <PageFunction>Instructor Portfolio</PageFunction>
      <Container>
        {userPortfolios.map((p, i) => (
          <Card
            key={i}
            id={p._id}
            projectName={p.title}
            techStack={p.techStack}
            projectImage="url('/bg.jpeg')"
            buttonBg={p.theme}
            as={`/portfolios/${p._id}/edit`}
            remove={() => {
              if (
                window.confirm(
                  `Permanently Delete Portfolio with ID: ${p._id}?`
                )
              )
                return deletePortfolio({ variables: { id: p._id } });
            }}
          />
        ))}
      </Container>
    </>
  );
};

//! My HOC "withAuth" is trying to get the user using "useGetUser({fetchPolicy: 'network-only'})" but in this case for Dashboard, we're rendering this page on the server (because of "getDataFromTree") therefore we are also executing useGetUser on the server, but when we're sending from the server our cookie is not present. Cookie is present when we're sending request from the browser. So we need to explicitly inform "ApolloClient" about our credentials (to include the cookie in this request).
export default withApollo(
  withAuth(withParent(InstructorDashboard), ['admin', 'instructor']),
  { getDataFromTree }
);
