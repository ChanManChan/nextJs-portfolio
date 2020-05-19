import Loading from '@/components/styles/Loading';
import Disabled_State from '@/components/styles/Disabled_State';
import CustomButton from '@/components/shared/CustomButton';
import Dropzone from '@/components/shared/Dropzone';
import CustomInput from '@/components/shared/CustomInput';
import { Field, Formik, Form } from 'formik';
import { validationSchemaPortfolio } from '@/components/global/Validator';
import AccordionMenu from '@/components/shared/AccordionMenu';

const PortfolioForm = ({ f_Stack }) => (
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
    {({ isSubmitting, setFieldValue, values }) => (
      <Disabled_State>
        <Form>
          <Field
            name='title'
            type='text'
            placeholder='Enter Project Title'
            as={CustomInput}
          />
          <AccordionMenu
            name='techStack'
            title='TechStack'
            stack={f_Stack}
            s_Formik_Arr={values.techStack}
          />
          <Field
            name='repoAPI'
            type='text'
            placeholder='Enter API Repo URL'
            as={CustomInput}
          />
          <Field
            name='repoClient'
            type='text'
            placeholder='Enter Client Repo URL'
            as={CustomInput}
          />
          <Field
            name='deployed'
            type='text'
            placeholder='Enter Deployed URL'
            as={CustomInput}
          />
          <Field
            name='theme'
            type='text'
            placeholder='Enter Theme eg:-[#fff]'
            as={CustomInput}
          />
          <Field
            name='description'
            type='text'
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
