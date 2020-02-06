import * as Yup from 'yup';

const vSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please make sure you entered a valid email!')
    .required('Please enter your email address'),
  name: Yup.string()
    .min(4, 'Please enter a correct full name.')
    .max(50, 'This name is too long')
    .required('Please enter your name'),
  subscription: Yup.string().required('Please choose a subscription')
});

export default vSchema;
