import * as yup from 'yup';

const validationSchemaSignIn = yup.object({
  email: yup.string().required('Enter your Email').email(),
  password: yup
    .string()
    .required('Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
});

const validationSchemaRegister = yup.object({
  username: yup.string().min(5).max(35).required('Enter a username'),
  email: yup.string().required('Enter your Email').email(),
  password: yup
    .string()
    .required('Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  confirmPassword: yup
    .string()
    .required('Confirm Password and Password do not match')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  avatar: yup.mixed().required('Add a profile image'),
});

const validationSchemaPortfolio = yup.object({
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
});

module.exports = {
  validationSchemaSignIn,
  validationSchemaRegister,
  validationSchemaPortfolio,
};
