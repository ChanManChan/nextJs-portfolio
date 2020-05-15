import { Field, Formik, Form } from 'formik';
import CustomInput from '@/components/shared/CustomInput';
import Dropzone from '@/components/shared/Dropzone';
import { validationSchemaRegister } from '@/components/global/Validator';
import CustomButton from '@/components/shared/CustomButton';
import Loading from '@/components/styles/Loading';
import styled, { css } from 'styled-components';

const state_Change = ({ loading }) => {
  if (loading === 'true')
    return css`
      &:after {
        content: '';
        background-color: ${(p) =>
          p.theme.id === 'light'
            ? 'rgba(0, 0, 0, 0.7)'
            : 'rgba(255,255,255,0.7)'};
        position: absolute;
        top: -1rem;
        left: -1rem;
        right: -1rem;
        bottom: -1rem;
        border-radius: 1rem;
      }
    `;
  else
    return css`
      &:after {
        content: '';
        background-color: transparent;
        position: absolute;
        top: 50%;
        left: 50%;
        right: 50%;
        bottom: 50%;
      }
    `;
};

const Container = styled.div`
  width: 100%;
  height: 100;
  position: relative;
  background-color: transparent;
  &:after {
    content: '';
    transition: all 0.2s ease;
  }
  ${state_Change}
`;

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
    {({ isSubmitting, setFieldValue }) => (
      <Container loading={`${loading}`}>
        <Form>
          <Dropzone
            loading={`${loading}`}
            setFieldValue={setFieldValue}
            maxSize={100000}
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
      </Container>
    )}
  </Formik>
);
export default RegisterForm;
