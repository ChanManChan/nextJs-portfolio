import { Field, Formik, Form } from 'formik';
import CustomInput from '@/components/shared/CustomInput';
import Dropzone from '@/components/shared/Dropzone';
import { validationSchemaRegister } from '@/components/global/Validator';
import CustomButton from '@/components/shared/buttons/CustomButton';
import Loading from '@/components/styles/Loading';
import Disabled_State from '@/components/styles/Disabled_State';

const RegisterForm = ({ req_Parent, loading }) => (
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
      req_Parent(data);
      setSubmitting(false);
      resetForm();
    }}
  >
    {({ isSubmitting, setFieldValue, errors }) => (
      <Disabled_State loading={`${loading}`}>
        <Form>
          <Dropzone
            loading={`${loading}`}
            setFieldValue={setFieldValue}
            maxSize={100000}
            fieldKey='avatar'
            pot_err={errors}
          />
          <Field
            name='username'
            type='text'
            loading={`${loading}`}
            placeholder='Enter your username'
            as={CustomInput}
          />
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
          <Field
            name='confirmPassword'
            type='password'
            loading={`${loading}`}
            placeholder='Re-Type Password'
            as={CustomInput}
          />
          <CustomButton
            type='submit'
            disabled={isSubmitting}
            buttonText='Register'
          />
        </Form>
        <Loading loading={`${loading}`} />
      </Disabled_State>
    )}
  </Formik>
);
export default RegisterForm;
