import RegisterForm from '@/components/forms/RegisterForm';
import styled from 'styled-components';
import { useSignUp } from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import { toast } from 'react-toastify';
import Redirect from '@/components/shared/Redirect';
import Loading from '@/components/styles/Loading';

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
  const [
    signUp,
    { loading: mutationLoading, error: mutationError },
  ] = useSignUp();
  // if (mutationLoading) {
  //   return <Loading />;
  // } else if (mutationError) {

  // } else {
  //   toast.success('Successfully registered user', {
  //     position: toast.POSITION.BOTTOM_LEFT,
  //   });
  //   return <Redirect to='/login' />;
  // }
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
      {mutationLoading && <Loading />}
      {mutationError &&
        toast.error(mutationError, { position: toast.POSITION.BOTTOM_LEFT })}
    </FormWrapper>
  );
};
export default withApollo(Register);
