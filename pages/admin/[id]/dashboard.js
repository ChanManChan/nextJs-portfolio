import styled from 'styled-components';
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import withParent from '@/hoc/withParent';
import Card from '@/components/shared/card/Card';
import { useGetUserProjects, useDeleteProject } from '@/apollo/actions';
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

const AdminDashboard = () => {
  const { data } = useGetUserProjects();
  const [deleteProject] = useDeleteProject();
  const userProjects = (data && data.userProjects) || [];
  return (
    <>
      <PageFunction>Admin Projects</PageFunction>
      <Container>
        {userProjects.map((p, i) => (
          <Card
            key={i}
            id={p._id}
            projectName={p.title}
            techStack={p.techStack}
            projectImage="url('/bg.jpeg')"
            buttonBg={p.theme}
            as={`/projects/${p._id}/edit`}
            remove={() => {
              if (
                window.confirm(`Permanently Delete Project with ID: ${p._id}?`)
              )
                return deleteProject({ variables: { id: p._id } });
            }}
          />
        ))}
      </Container>
    </>
  );
};

//! My HOC "withAuth" is trying to get the user using "useGetUser({fetchPolicy: 'network-only'})" but in this case for Dashboard, we're rendering this page on the server (because of "getDataFromTree") therefore we are also executing useGetUser on the server, but when we're sending from the server our cookie is not present. Cookie is present when we're sending request from the browser. So we need to explicitly inform "ApolloClient" about our credentials (to include the cookie in this request).

//! "ssr: true" <- Redirect on the server.

export default withApollo(
  withAuth(withParent(AdminDashboard), ['admin', 'instructor'], {
    ssr: true,
  }),
  { getDataFromTree }
);
