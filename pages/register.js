import RegisterForm from '@/components/forms/RegisterForm';
import { useSignUp } from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import Redirect from '@/components/shared/Redirect';
import withParent from '@/hoc/withParent';
import { PageFunction, FormWrapper } from '@/components/styles/common';

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
