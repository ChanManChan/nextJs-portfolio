import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup.string().min(5).max(35).required('Please Enter a username'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
});

module.exports = {
  validationSchema,
};
