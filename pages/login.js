import LoginForm from '@/components/forms/LoginForm';
import withApollo from '@/hoc/withApollo';
import { useSignIn } from '@/apollo/actions';
import Redirect from '@/components/shared/Redirect';
import withParent from '@/hoc/withParent';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import kv_pairs from '@/variables/messages';
import { PageFunction, FormWrapper } from '@/components/styles/common';

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
