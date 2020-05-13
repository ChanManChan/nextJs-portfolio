import R_Form from '@/components/shared/CustomForm.js';
import CustomInput from '@/components/shared/CustomInput';
import { Field } from 'formik';
import { validationSchemaRegister } from '@/components/global/Validator';

const Register = () => (
  <R_Form
    f2u
    pageFunction='Sign Up'
    buttonText='Register'
    formValues={{
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      avatar: null,
    }}
    validator={validationSchemaRegister}
  >
    <Field
      name='username'
      type='text'
      placeholder='Enter your username'
      as={CustomInput}
    />
    <Field
      name='email'
      type='email'
      placeholder='Enter your email'
      as={CustomInput}
    />
    <Field
      name='password'
      type='password'
      placeholder='Enter your password'
      as={CustomInput}
    />
    <Field
      name='confirmPassword'
      type='password'
      placeholder='Re-Type Password'
      as={CustomInput}
    />
  </R_Form>
);
export default Register;
