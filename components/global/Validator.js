import * as yup from 'yup';

const validationSchemaSignIn = yup.object({
  email: yup.string().required('Please Enter your Email').email(),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
});

const validationSchemaRegister = yup.object({
  username: yup.string().min(5).max(35).required('Please Enter a username'),
  email: yup.string().required('Please Enter your Email').email(),
  password: yup
    .string()
    .required('Please Enter your password')
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

module.exports = {
  validationSchemaSignIn,
  validationSchemaRegister,
};
