import styled from 'styled-components';
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import PortfolioForm from '@/components/forms/PortfolioForm';
import { useFetchTech } from '@/apollo/actions';
import { useCreatePortfolio } from '@/apollo/actions';
import { useRouter } from 'next/router';
import withParent from '@/hoc/withParent';

//! Container
const FormWrapper = styled.div`
  width: 100%;
  /* padding: top | right & left | bottom */
  padding: 6.4rem 1.5rem 2.4rem;
`;

//! Page title
const PageFunction = styled.h1`
  /* margin: top | right & left | bottom */
  margin: 0 0 4rem;
  font-size: 3rem;
`;

const CreatePortfolio = () => {
  const { data, loading } = useFetchTech();
  const [createPortfolio, { loading: up_load }] = useCreatePortfolio();
  const stack = (data && data.techStack) || [];
  const router = useRouter();

  const res_serverOnCreate = async (port_data) => {
    await createPortfolio({ variables: port_data });
    router.push('/portfolios');
  };

  return (
    <FormWrapper>
      <PageFunction>Create New Portfolio</PageFunction>
      <PortfolioForm
        f_Stack={stack}
        loading={loading || up_load}
        parent_req={res_serverOnCreate}
        btn_txt='Create Portfolio'
        ld_msg='Creating portfolio...'
      />
    </FormWrapper>
  );
};

export default withApollo(
  withAuth(withParent(CreatePortfolio), ['admin', 'instructor'])
);
