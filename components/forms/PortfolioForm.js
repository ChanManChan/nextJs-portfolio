import Loading from '@/components/styles/Loading';
import Disabled_State from '@/components/styles/Disabled_State';
import CustomButton from '@/components/shared/CustomButton';
import Dropzone from '@/components/shared/Dropzone';
import CustomInput from '@/components/shared/CustomInput';
import { Field, Formik, Form } from 'formik';
import { validationSchemaPortfolio } from '@/components/global/Validator';
import MultiSelect from '@/components/shared/MultiSelectCheck';

const PortfolioForm = () => (
  <Formik
    initialValues={{
      title: '',
      techStack: [],
      repoAPI: '',
      repoClient: '',
      deployed: '',
      theme: '',
      description: '',
    }}
    validationSchema={validationSchemaPortfolio}
    onSubmit={(data, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      console.log('DATA FROM PORTFOLIO FORM: ', data);
      setSubmitting(false);
      resetForm();
    }}
  >
    {({ isSubmitting, setFieldValue }) => (
      <Disabled_State>
        <Form>
          <Field
            name='title'
            type='text'
            loading={`${loading}`}
            placeholder='Enter Project Title'
            as={CustomInput}
          />
          <Field name='techStack' as={MultiSelect} />
          <Field
            name='repoAPI'
            type='text'
            loading={`${loading}`}
            placeholder='Enter API Repo URL'
            as={CustomInput}
          />
          <Field
            name='repoClient'
            type='text'
            loading={`${loading}`}
            placeholder='Enter Client Repo URL'
            as={CustomInput}
          />
          <Field
            name='deployed'
            type='text'
            loading={`${loading}`}
            placeholder='Enter Deployed URL'
            as={CustomInput}
          />
          <Field
            name='theme'
            type='text'
            loading={`${loading}`}
            placeholder='Enter Theme eg:-[#fff]'
            as={CustomInput}
          />
          <Field
            name='description'
            type='text'
            loading={`${loading}`}
            placeholder='Describe your project'
            as={CustomInput}
          />
          <CustomButton
            type='submit'
            disabled={isSubmitting}
            buttonText='Create Portfolio'
          />
        </Form>
      </Disabled_State>
    )}
  </Formik>
);

export default PortfolioForm;
