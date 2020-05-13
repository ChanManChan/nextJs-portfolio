import L_Form from '@/components/shared/CustomForm.js';
import CustomInput from '@/components/shared/CustomInput';
import { Field } from 'formik';
import { validationSchemaSignIn } from '@/components/global/Validator';

const Login = () => (
  <L_Form
    pageFunction='Sign In'
    buttonText='Log In'
    formValues={{ username: '', password: '' }}
    validator={validationSchemaSignIn}
  >
    <Field
      name='username'
      placeholder='Enter your name'
      type='text'
      as={CustomInput}
    />
    <Field
      name='password'
      placeholder='Enter your password'
      type='password'
      as={CustomInput}
    />
  </L_Form>
);
export default Login;
