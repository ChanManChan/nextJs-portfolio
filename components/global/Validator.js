import * as yup from 'yup';

const validationSchemaSignIn = yup.object({
  email: yup.string().required('Enter your Email').email(),
  password: yup
    .string()
    .required('Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and one special Character'
    ),
});

const validationSchemaRegister = yup.object({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(35)
    .required('Enter a username'),
  email: yup.string().required('Enter your Email').email(),
  password: yup
    .string()
    .required('Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and one special Character'
    ),
  confirmPassword: yup
    .string()
    .required('Confirm Password and Password do not match')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  avatar: yup.mixed().required('Add a profile image of size <=100KB'),
});

const validationSchemaProject = yup.object({
  title: yup.string().required('Please enter the title of your project'),
  techStack: yup
    .array()
    .of(yup.string())
    .required('Provide at least one framework/library used'),
  repoAPI: yup.string().required('Please enter your API repository URL'),
  repoClient: yup.string().required('Please enter your Client repository URL'),
  deployed: yup.string().required('Please enter your deployed link'),
  theme: yup.string().required('Please enter a theme eg:- [#fff]'),
  description: yup.string().required('Describe your project'),
  screenshots: yup
    .array()
    .of(yup.mixed())
    .required('Provide [0<x<=4] screenshot(s) with caption and description'),
});

const validationSchemaBrief = yup.object({
  title: yup.string().required('Brief title cannot be null'),
  content: yup
    .string()
    .required('Mention the concepts covered in CSV format')
    .matches(/^([A-Za-z1-9].*,[ ])*[A-Za-z1-9].*$/, 'Must be in CSV format'),
  certificate_img: yup.mixed().required('Provide a certificate'),
});

const validationSchemaTopic = yup.object({
  title: yup.string().required('Topic title is necessary'),
  content: yup.string().required('Elaborate please'),
});

const validationSchemaPost = yup.object({
  content: yup.string().required('Post cannot be null'),
});

module.exports = {
  validationSchemaSignIn,
  validationSchemaRegister,
  validationSchemaProject,
  validationSchemaBrief,
  validationSchemaTopic,
  validationSchemaPost,
};
