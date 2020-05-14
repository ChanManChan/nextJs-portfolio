import RegisterForm from '@/components/forms/RegisterForm';
import styled from 'styled-components';
import { useSignUp } from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';

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

const Register = () => {
  const [signUp] = useSignUp();
  return (
    <FormWrapper>
      <PageFunction>Register</PageFunction>
      <RegisterForm
        req_Parent={(registerData) => {
          signUp({
            variables: (({ confirmPassword, ...rest }) => rest)(registerData),
          });
        }}
      />
    </FormWrapper>
  );
};
export default withApollo(Register);
