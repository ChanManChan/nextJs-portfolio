import LoginForm from '@/components/forms/LoginForm';
import styled from 'styled-components';
import withApollo from '@/hoc/withApollo';
import { useSignIn } from '@/apollo/actions';
import Redirect from '@/components/shared/Redirect';
import withParent from '@/hoc/withParent';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import kv_pairs from '@/variables/messages';

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

const Login = () => {
  const disposeId = React.useRef(null);

  const router = useRouter();
  const { message } = router.query;
  const [signIn, { data, loading }] = useSignIn();

  React.useEffect(() => {
    disposeId.current = setTimeout(() => {
      router.replace('/login', '/login', { shallow: true });
    }, 2000);
    return () => {
      clearTimeout(disposeId.current);
    };
  }, [message]);

  if (message)
    toast[kv_pairs[message].status](kv_pairs[message].value, {
      position: toast.POSITION.BOTTOM_LEFT,
    });

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
