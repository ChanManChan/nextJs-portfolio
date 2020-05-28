import styled from 'styled-components';
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import withParent from '@/hoc/withParent';
import ProjectForm from '@/components/forms/ProjectForm';
import {
  useFetchTech,
  useGetProject,
  useUpdateProject,
} from '@/apollo/actions';
import { useRouter } from 'next/router';

const FormWrapper = styled.div`
  width: 100%;
  padding: 3rem 1.5rem 2.4rem;
`;

const PageFunction = styled.h1`
  margin: 0 0 4rem;
  font-size: 3rem;
`;

const EditProject = () => {
  const { id } = useRouter().query;
  const { data, loading } = useFetchTech();
  const { data: port_data, loading: port_load } = useGetProject({
    variables: { id },
  });
  const [updateProject, { loading: up_loading }] = useUpdateProject();
  const stack = (data && data.techStack) || [];
  const project = (port_data && port_data.project) || [];

  return (
    <FormWrapper>
      <PageFunction>Edit Project</PageFunction>
      <ProjectForm
        f_Stack={stack}
        f_port={project}
        loading={loading || port_load || up_loading}
        parent_req={(up_data) =>
          updateProject({ variables: { id, ...up_data } })
        }
        btn_txt='Update Project'
        ld_msg='Updating fields...'
      />
    </FormWrapper>
  );
};

export default withApollo(
  withAuth(withParent(EditProject), ['admin', 'instructor'])
);
