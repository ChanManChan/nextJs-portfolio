import styled from 'styled-components';
import CustomButton from './CustomButton';
import { Formik, Form } from 'formik';
import Dropzone from '@/components/shared/Dropzone';
import { useSignUp } from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';

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

const S_Mutations = (data, f2u) => {
  if (f2u) {
  }
};

const C_Form = (buttonText, children, formValues, f2u, validator) => (
  <Formik
    initialValues={formValues}
    validationSchema={validator}
    onSubmit={(data, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      const recon_Data = (({ confirmPassword, ...rest }) => rest)(data);
      signUp({ variables: recon_Data });
      // S_Mutations(data, f2u);
      console.log('FORM DATA: ', recon_Data);
      setSubmitting(false);
      // resetForm();
    }}
  >
    {({ isSubmitting, setFieldValue }) => (
      <Form>
        {f2u && <Dropzone setFieldValue={setFieldValue} maxSize={100000} />}
        {children}
        <CustomButton
          type='submit'
          disabled={isSubmitting}
          buttonText={buttonText}
        />
      </Form>
    )}
  </Formik>
);

const CustomForm = ({
  pageFunction,
  buttonText,
  children,
  formValues,
  f2u,
  validator,
}) => {
  const [signUp] = useSignUp();

  return (
    <FormWrapper>
      <PageFunction>
        <h1>{pageFunction}</h1>
      </PageFunction>
      {C_Form(buttonText, children, formValues, f2u, validator)}
    </FormWrapper>
  );
};

export default withApollo(CustomForm);
