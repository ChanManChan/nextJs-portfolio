import Loading from '@/components/styles/Loading';
import Disabled_State from '@/components/styles/Disabled_State';
import CustomButton from '@/components/shared/CustomButton';
import Dropzone from '@/components/shared/Dropzone';
import CustomInput from '@/components/shared/CustomInput';
import { Field, Formik, Form } from 'formik';
import { validationSchemaPortfolio } from '@/components/global/Validator';
import AccordionMenu from '@/components/shared/AccordionMenu';

const PortfolioForm = ({
  f_Stack,
  loading,
  parent_req,
  f_port: {
    title,
    techStack,
    repoAPI,
    repoClient,
    deployed,
    theme,
    description,
  } = {},
}) => (
  <Formik
    initialValues={{
      title: title || '',
      techStack: (techStack && techStack.map((t) => t._id)) || [],
      repoAPI: repoAPI || '',
      repoClient: repoClient || '',
      deployed: deployed || '',
      theme: theme || '',
      description: description || '',
      screenshots: [],
    }}
    validationSchema={validationSchemaPortfolio}
    onSubmit={(data, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      parent_req(data);
      setSubmitting(false);
      resetForm();
    }}
  >
    {({ isSubmitting, setFieldValue, values }) => (
      <Disabled_State loading={`${loading}`}>
        <Form>
          <AccordionMenu
            name='techStack'
            title='TechStack'
            stack={f_Stack}
            s_Formik_Arr={values.techStack}
          />
          <Dropzone
            setFieldValue={setFieldValue}
            fieldKey='screenshots'
            maxSize={100000}
            multi_Sel
            loading={`${loading}`}
          />
          <Field
            name='title'
            type='text'
            placeholder='Enter Project Title'
            loading={`${loading}`}
            as={CustomInput}
          />
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
            placeholder='Enter Deployed URL'
            loading={`${loading}`}
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
        <Loading loading={`${loading}`} />
      </Disabled_State>
    )}
  </Formik>
);

export default PortfolioForm;
