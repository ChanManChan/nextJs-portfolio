// import LoginForm from '@/components/forms/LoginForm';
import styled from 'styled-components';
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import PortfolioForm from '@/components/forms/PortfolioForm';
import { useFetchTech } from '@/apollo/actions';

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
  const { data } = useFetchTech();
  const stack = (data && data.techStack) || [];
  return (
    <FormWrapper>
      <PageFunction>Create New Portfolio</PageFunction>
      <PortfolioForm f_Stack={stack} />
    </FormWrapper>
  );
};
export default withApollo(withAuth(CreatePortfolio, 'admin'));
