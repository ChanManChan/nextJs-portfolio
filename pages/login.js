import LoginForm from '@/components/forms/LoginForm';
import styled from 'styled-components';
import withApollo from '@/hoc/withApollo';
import { useSignIn } from '@/apollo/actions';
import Redirect from '@/components/shared/Redirect';
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

const Login = () => {
  const [signIn, { data, loading }] = useSignIn();
  if (data && data.signIn) return <Redirect to='/' />;
  return (
    <FormWrapper>
      <PageFunction>SignIn</PageFunction>
      <LoginForm
        req_Parent={(signInData) => signIn({ variables: signInData })}
        loading={loading}
      />
    </FormWrapper>
  );
};
export default withApollo(withParent(Login));
