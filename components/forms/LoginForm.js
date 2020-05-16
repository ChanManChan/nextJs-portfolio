import CustomInput from '@/components/shared/CustomInput';
import { Field, Formik, Form } from 'formik';
import { validationSchemaSignIn } from '@/components/global/Validator';
import CustomButton from '@/components/shared/CustomButton';
import Disabled_State from '@/components/styles/Disabled_State';
import Loading from '@/components/styles/Loading';

const LoginForm = ({ req_Parent, loading }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={validationSchemaSignIn}
    onSubmit={(data, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      req_Parent(data);
      setSubmitting(false);
      resetForm();
    }}
  >
    {({ isSubmitting }) => (
      <Disabled_State loading={`${loading}`}>
        <Form>
          <Field
            name='email'
            type='email'
            loading={`${loading}`}
            placeholder='Enter your email'
            as={CustomInput}
          />
          <Field
            name='password'
            type='password'
            loading={`${loading}`}
            placeholder='Enter your password'
            as={CustomInput}
          />
          <CustomButton
            type='submit'
            disabled={isSubmitting}
            buttonText='SignIn'
          />
        </Form>
        <Loading loading={`${loading}`} />
      </Disabled_State>
    )}
  </Formik>
);
export default LoginForm;
