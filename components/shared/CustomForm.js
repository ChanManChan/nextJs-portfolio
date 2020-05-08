import styled from 'styled-components';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import { Formik, Form, Field } from 'formik';
import { validationSchema } from '../global/Validator';

//! Container
const FormWrapper = styled.div`
  width: 100%;
  /* padding: top | right & left | bottom */
  padding: 6.4rem 1.5rem 2.4rem;
`;

//! Page title
const PageFunction = styled.div`
  /* margin: top | right & left | bottom */
  margin: 0 0 4rem;
  > h1 {
    font-size: 3rem;
  }
`;

const loginForm = (buttonText) => (
  <Formik
    initialValues={{
      username: '',
      password: '',
    }}
    validationSchema={validationSchema}
    onSubmit={(data, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      setTimeout(() => {
        console.log('FORM DATA: ', data);
        setSubmitting(false);
        resetForm();
      }, 2000);
    }}
  >
    {({ isSubmitting, errors }) => (
      <Form>
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
        <CustomButton
          disabled={isSubmitting}
          buttonText={buttonText}
          type='submit'
        />
        <pre>{JSON.stringify(errors, null, 2)}</pre>
      </Form>
    )}
  </Formik>
);

const CustomForm = ({ page, buttonText }) => (
  <FormWrapper>
    <PageFunction>
      <h1>{page}</h1>
    </PageFunction>
    {loginForm(buttonText)}
  </FormWrapper>
);

export default CustomForm;
