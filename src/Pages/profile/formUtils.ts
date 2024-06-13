import * as Yup from 'yup';

interface FormValues {
  id: number
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  birthday: string;
  phone: string;
  password: string;
}


export const getInitialValues = ({ profileData }: any): FormValues => {
  return {
    id: profileData?.id || 0,
    first_name: profileData?.first_name || "",
    last_name: profileData?.last_name || "",
    email: profileData?.email || "",
    gender: profileData?.gender || "",
    birthday: profileData?.birthday || "",
    phone: profileData?.phone || "",
    password: "********",
  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({
    first_name: Yup.string().required('Please enter your name'),
    last_name: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Please enter a valid email').required('Please enter your email'),
    birthday: Yup.string().required('Please enter your birthday'),
    gender: Yup.string().required('Please enter your gender'),
    phone: Yup.string().required('Please enter your phone number'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Please enter your password'),
  });
}


export const getValidationSchemaPassowrd = () => {
  return Yup.object().shape({
    current_password: Yup.string().min(8, 'Password must be at least 8 characters').required('Please enter your password'),
    new_password: Yup.string().min(8, 'Password must be at least 8 characters').required('Please enter your New password'),
    new_password_confirmation: Yup.string().min(8, 'Password must be at least 8 characters').required('Please enter your confirm password'),
  });
}