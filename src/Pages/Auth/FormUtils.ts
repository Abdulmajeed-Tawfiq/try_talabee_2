import * as Yup from 'yup';


export const GenderOption = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]

export const getLoginInitialValues = () => {
  return ({
    phone: '',
    password: '',
  })
}

export const getRegisterInitialValues = () => {
  return ({
    first_name: '',
    last_name: '',
    email: "",
    password: '',
    phone: "",
    birthday: "",
    gender: ""
  })
}




export const getLoginValidationSchema = () => {
  return Yup.object({
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
  })
}


export const getRegisterValidationSchema = () => {
  return Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
  })
}


