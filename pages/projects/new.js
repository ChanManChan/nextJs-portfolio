import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import ProjectForm from '@/components/forms/ProjectForm';
import { useFetchTech } from '@/apollo/actions';
import { useCreateProject } from '@/apollo/actions';
import { useRouter } from 'next/router';
import withParent from '@/hoc/withParent';
import { PageFunction, FormWrapper } from '@/components/styles/common';

const CreateProject = () => {
  const { data, loading } = useFetchTech();
  const [createProject, { loading: up_load }] = useCreateProject();
  const stack = (data && data.techStack) || [];
  const router = useRouter();

  const res_serverOnCreate = async (port_data) => {
    await createProject({ variables: port_data });
    router.push('/projects');
  };

  return (
    <FormWrapper>
      <PageFunction>Create New Project</PageFunction>
      <ProjectForm
        f_Stack={stack}
        loading={loading || up_load}
        parent_req={res_serverOnCreate}
        btn_txt='Create Project'
        ld_msg='Creating project...'
      />
    </FormWrapper>
  );
};

export default withApollo(
  withAuth(withParent(CreateProject), ['admin', 'instructor'])
);
