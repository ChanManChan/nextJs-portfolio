import LoginForm from '@/components/forms/LoginForm';
import styled from 'styled-components';
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
  const login = (loginData) => {
    alert(JSON.stringify(loginData));
  };
  return (
    <FormWrapper>
      <PageFunction>SignIn</PageFunction>
      <LoginForm alertSubmit={login} />
    </FormWrapper>
  );
};
export default Login;
