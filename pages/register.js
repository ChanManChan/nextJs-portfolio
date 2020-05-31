import RegisterForm from '@/components/forms/RegisterForm';
import styled from 'styled-components';
import { useSignUp } from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import Redirect from '@/components/shared/Redirect';
import withParent from '@/hoc/withParent';

//! Container
const FormWrapper = styled.div`
  width: 100%;
  /* padding: top | right & left | bottom */
  padding: 3rem 1.5rem 2.4rem;
`;

//! Page title
const PageFunction = styled.h1`
  /* margin: top | right & left | bottom */
  margin: 0 0 4rem;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Register = () => {
  const [signUp, { data, loading }] = useSignUp();
  if (data && data.signUp) return <Redirect to='/login' />;
  return (
    <FormWrapper>
      <PageFunction>Register</PageFunction>
      <RegisterForm
        req_Parent={(registerData) =>
          signUp({
            variables: (({ confirmPassword, ...rest }) => rest)(registerData),
          })
        }
        loading={loading}
      />
    </FormWrapper>
  );
};
export default withApollo(withParent(Register));
