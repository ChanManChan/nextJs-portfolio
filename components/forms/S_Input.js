import { Field, Formik, Form, useField } from 'formik';
import Dropzone from '@/components/shared/Dropzone';
import Loading from '@/components/styles/Loading';
import Disabled_State from '@/components/styles/Disabled_State';
import {
  validationSchemaBrief,
  validationSchemaTopic,
  validationSchemaPost,
} from '@/components/global/Validator';
import {
  Footer,
  Container,
  Input,
  Button,
  RES_TO,
} from '@/components/styles/specific/forms[S_Input]_styles';
import { removeFooter } from '@/utils/functions';

const Vul_Input = ({ loading, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <Input
      {...field}
      placeholder={placeholder}
      helperText={errorText}
      loading={loading}
    />
  );
};

const cleanUp = (brief, post, s_state, removeFooter) => {
  removeFooter(
    '.post--btn',
    `Add a ${brief ? 'Brief' : post ? 'Post' : 'Topic'}`
  );
  removeFooter('.nlead--btn', 'Reply');
  s_state && s_state({});
};

const switchInit = (brief, post) =>
  brief
    ? {
        title: '',
        content: '',
        certificate_img: null,
      }
    : post
    ? {
        content: '',
      }
    : {
        title: '',
        content: '',
      };

const Switch_F = (post, loading, plc_Title, Vul_Input, replyTo) => {
  return post ? (
    <RES_TO>
      <p>
        Reply To: <span>{replyTo}</span>
      </p>
    </RES_TO>
  ) : (
    <Field
      type='text'
      name='title'
      loading={`${loading}`}
      placeholder={plc_Title}
      as={Vul_Input}
    />
  );
};

const FooterInput = ({
  plc_Title,
  plc_Content,
  parent_fn,
  loading,
  brief = false,
  post = false,
  replyTo,
  s_state,
}) => (
  <Footer className='slide-footer'>
    <Formik
      validateOnMount={false}
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={switchInit(brief, post)}
      validationSchema={
        brief
          ? validationSchemaBrief
          : post
          ? validationSchemaPost
          : validationSchemaTopic
      }
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        parent_fn(data, resetForm);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setFieldValue, errors }) => (
        <Disabled_State loading={`${loading}`}>
          <Form>
            <Container>
              {brief && (
                <Dropzone
                  loading={`${loading}`}
                  setFieldValue={setFieldValue}
                  maxSize={100000}
                  fieldKey='certificate_img'
                  pot_err={errors}
                  no_prev
                />
              )}
              {Switch_F(post, loading, plc_Title, Vul_Input, replyTo)}
              <Field
                type='text'
                name='content'
                loading={`${loading}`}
                placeholder={plc_Content}
                as={Vul_Input}
              />
              <Button disabled={isSubmitting} type='submit'>
                Submit
              </Button>
              <Button
                type='button'
                onClick={() => cleanUp(brief, post, s_state, removeFooter)}
              >
                Cancel
              </Button>
            </Container>
          </Form>
          <Loading
            msg={`Creating new ${brief ? 'brief' : post ? 'post' : 'topic'}...`}
            loading={`${loading}`}
          />
        </Disabled_State>
      )}
    </Formik>
  </Footer>
);

export default FooterInput;
