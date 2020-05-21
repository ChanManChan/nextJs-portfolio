import styled from 'styled-components';
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import PortfolioForm from '@/components/forms/PortfolioForm';
import { useFetchTech } from '@/apollo/actions';
import { useRouter } from 'next/router';
import withParent from '@/hoc/withParent';
import { useGetPortfolio } from '@/apollo/actions';

const FormWrapper = styled.div`
  width: 100%;
  padding: 6.4rem 1.5rem 2.4rem;
`;

const PageFunction = styled.h1`
  margin: 0 0 4rem;
  font-size: 3rem;
`;

const EditPortfolio = () => {
  const { id } = useRouter().query;
  const { data, loading } = useFetchTech();
  const { data: port_data, loading: port_load } = useGetPortfolio({
    variables: { id },
  });

  const stack = (data && data.techStack) || [];
  const portfolio = (port_data && port_data.portfolio) || [];

  const res_serverOnCreate = (port_data) => {
    console.log('Data from Portfolio Update: ', port_data);
  };

  return (
    <FormWrapper>
      <PageFunction>Edit Portfolio</PageFunction>
      <PortfolioForm
        f_Stack={stack}
        f_port={portfolio}
        loading={loading || port_load}
        parent_req={res_serverOnCreate}
      />
    </FormWrapper>
  );
};

export default withApollo(
  withAuth(withParent(EditPortfolio), ['admin', 'instructor'])
);
