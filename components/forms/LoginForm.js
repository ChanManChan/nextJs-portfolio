import CustomInput from '@/components/shared/CustomInput';
import { Field, Formik, Form } from 'formik';
import { validationSchemaSignIn } from '@/components/global/Validator';
import CustomButton from '@/components/shared/CustomButton';

const LoginForm = ({ alertSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchemaSignIn}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        // const recon_Data = (({ confirmPassword, ...rest }) => rest)(data);
        // signUp({ variables: recon_Data });
        // S_Mutations(data, f2u);
        alertSubmit(data);
        // console.log(data);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
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
          <CustomButton
            type='submit'
            disabled={isSubmitting}
            buttonText='SignIn'
          />
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
