import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email('Must be in email format').required('Email field is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password field is required')
});
