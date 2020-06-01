import Loading from '@/components/styles/Loading';
import Disabled_State from '@/components/styles/Disabled_State';
import CustomButton from '@/components/shared/buttons/CustomButton';
import Dropzone from '@/components/shared/Dropzone';
import CustomInput from '@/components/shared/CustomInput';
import { Field, Formik, Form } from 'formik';
import { validationSchemaProject } from '@/components/global/Validator';
import AccordionMenu from '@/components/shared/menus/AccordionMenu';

const ProjectForm = ({
  f_Stack,
  loading,
  parent_req,
  btn_txt,
  ld_msg,
  f_port: {
    title = '',
    techStack = [],
    repoAPI = '',
    repoClient = '',
    deployed = '',
    theme = '',
    description = '',
  } = {},
}) => {
  const [initialValues, setInitialValues] = React.useState({
    title,
    techStack,
    repoAPI,
    repoClient,
    deployed,
    theme,
    description,
  });

  React.useEffect(() => {
    setInitialValues({
      title,
      techStack,
      repoAPI,
      repoClient,
      deployed,
      theme,
      description,
    });
  }, [title]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        title: initialValues.title,
        techStack:
          initialValues.techStack && initialValues.techStack.map((t) => t._id),
        repoAPI: initialValues.repoAPI,
        repoClient: initialValues.repoClient,
        deployed: initialValues.deployed,
        theme: initialValues.theme,
        description: initialValues.description,
        screenshots: [],
      }}
      validationSchema={validationSchemaProject}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        parent_req(data);
        setInitialValues(data);
        setSubmitting(false);
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
              buttonText={btn_txt}
            />
          </Form>
          <Loading msg={ld_msg} loading={`${loading}`} />
        </Disabled_State>
      )}
    </Formik>
  );
};

export default ProjectForm;
