import { Field, Formik, Form } from 'formik';
import CustomInput from '@/components/shared/CustomInput';
import Dropzone from '@/components/shared/Dropzone';
import { validationSchemaRegister } from '@/components/global/Validator';
import CustomButton from '@/components/shared/CustomButton';

const RegisterForm = ({ req_Parent }) => (
  <Formik
    initialValues={{
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      avatar: null,
    }}
    validationSchema={validationSchemaRegister}
    onSubmit={(data, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      console.log('DATA: ', data);
      req_Parent(data);
      setSubmitting(false);
      resetForm();
    }}
  >
    {({ isSubmitting, setFieldValue }) => (
      <Form>
        <Dropzone setFieldValue={setFieldValue} maxSize={100000} />
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
        <CustomButton
          type='submit'
          disabled={isSubmitting}
          buttonText='Register'
        />
      </Form>
    )}
  </Formik>
);
export default RegisterForm;
