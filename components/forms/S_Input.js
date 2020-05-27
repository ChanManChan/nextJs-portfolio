import styled, { css } from 'styled-components';
import { Field, Formik, Form, useField } from 'formik';
import Dropzone from '@/components/shared/Dropzone';
import Loading from '@/components/styles/Loading';
import Disabled_State from '@/components/styles/Disabled_State';
import {
  validationSchemaBrief,
  validationSchemaTopic,
  validationSchemaPost,
} from '@/components/global/Validator';

const Footer = styled.footer`
  padding: 2rem 0;
  position: fixed;
  z-index: 1;
  bottom: -100%;
  left: 10%;
  right: 10%;
  background-color: transparent;
  transition: bottom 0.3s ease-in-out;
  &.active {
    bottom: 2rem;
  }
`;

const shared = css`
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
  padding: 4rem 2rem;
  position: relative;
  &:before {
    ${shared}
    z-index: -1;
    background: transparent;
    transform: translateX(-4.5rem) translateY(-5rem);
    border: 0.6rem solid ${(p) => p.theme.primaryColor};
  }
  &:after {
    ${shared}
    background: ${(p) => p.theme.tertiaryColor};
    z-index: -2;
    transform: translateX(-2rem) translateY(-2.25rem);
  }
  &:focus-within {
    background: ${(p) => p.theme.tertiaryColor};
    &:before {
      width: 0%;
      height: 0%;
      transform: translateX(0) translateY(0);
    }
  }
  .dropzone{
    margin:0 3rem;
     .dropzone--btn{
       margin-bottom:1rem;
     }
  }
`;

//The touch-action CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
//"touch-action: manipulation" <- Enable panning and pinch zoom gestures, but disable additional non-standard gestures such as double-tap to zoom.

/*important to override chrome's yellow background and black text autofill */
/* &:-webkit-autofill {
    background-color: transparent !important;
    box-shadow: 0 0 0 100rem #0ea8ec inset;
    -webkit-box-shadow: 0 0 0 100rem #0ea8ec inset;
    -webkit-text-fill-color: #fff !important;
  } */

const Input = styled.input.attrs((props) => ({
  placeholder: props.helperText ? props.helperText : props.placeholder,
  disabled: props.loading === 'true' ? true : false,
}))`
  height: 5rem;
  font-size: 3rem;
  padding: 0.65rem 1.2rem;
  border: 0.4rem solid #fff;
  margin: 1rem 3rem;
  background-color: transparent !important;
  appearance: none;
  color: #fff;
  transition: all 0.3s ease;
  touch-action: manipulation;
  &::placeholder {
    color: ${(p) => (p.helperText ? '#f00' : '#fff')};
  }
  &:focus {
    outline: 0;
    border: 0.6rem solid ${(p) => p.theme.primaryColor};
  }
`;

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

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem 2.5rem;
  background-color: ${(p) => p.theme.staticColor2};
  color: #fff;
  font-size: 1.45rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: all 0.3s ease;
  position: absolute;
  bottom: -2.8rem;
  left: 3.25%;
  &:last-of-type {
    left: 12.5%;
  }
  &:hover {
    border: 0.6rem solid ${(p) => p.theme.primaryColor};
  }
`;

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

const FooterInput = ({
  plc_Title,
  plc_Content,
  parent_fn,
  loading,
  brief = false,
  post = false,
}) => (
  <Footer className='slide-footer'>
    <Formik
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
      {({ isSubmitting, setFieldValue }) => (
        <Disabled_State loading={`${loading}`}>
          <Form>
            <Container>
              {brief && (
                <Dropzone
                  loading={`${loading}`}
                  setFieldValue={setFieldValue}
                  maxSize={100000}
                  fieldKey='certificate_img'
                />
              )}
              {!post && (
                <Field
                  type='text'
                  name='title'
                  loading={`${loading}`}
                  placeholder={plc_Title}
                  as={Vul_Input}
                />
              )}
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
                onClick={() => {
                  const footer = document.querySelector('.slide-footer');
                  if (footer.classList.contains('active')) {
                    footer.classList.remove('active');
                    document.querySelector('.post--btn').innerText = `Add a ${
                      brief ? 'Brief' : post ? 'Post' : 'Topic'
                    }`;
                    const nl_list = document.querySelectorAll('.nlead--btn');
                    for (let i = 0; i < nl_list.length; i++)
                      nl_list[i].innerText = 'Reply';
                  }
                }}
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
