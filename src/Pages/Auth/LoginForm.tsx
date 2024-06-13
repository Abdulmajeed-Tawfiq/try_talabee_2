import { Field, Form, Formik } from 'formik'
import { useEffect } from 'react'
import { useLogin } from '../../api/auth'
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/auth/AuthReducer'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import AuthHeader from './HeaderComponent'
import { getLoginInitialValues, getLoginValidationSchema } from './FormUtils'
import TalabeeField from '../../Components/Utils/TalabeeField/TalabeeField'
import { TOKEN_KEY } from '../../config/AppKey'

function LoginForm({ handleRegisterClick }: any) {
  const Navigate = useNavigate()
  const { mutate, isSuccess, isLoading, data, status, error } = useLogin()
  const dispatch = useDispatch()
  const [t] = useTranslation()


  const handelSubmit = (values: any) => {
    mutate({
      phone: values['phone'],
      password: values['password']
    })
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(login((data as any)?.data))
      Navigate('/', { replace: true })
      toast.success('Logged in successfully')
      // Store the token in localStorage
      localStorage.setItem(TOKEN_KEY, data.data[0].token);

    }
    else if ((error as any)?.response?.status == 510) {
      Navigate('/verfied')
    }

  }, [isSuccess, Navigate, dispatch, data, error])

  return (
    <div className="form-container sign-in">
      <Formik
        initialValues={getLoginInitialValues()}
        validationSchema={getLoginValidationSchema()}
        onSubmit={handelSubmit}
      >
        {({ errors, touched }) => (
          <Form >
            <AuthHeader />
            <h1 className='login_title' >{t("Sign In")}</h1>
            <div className='login_dev'>
              <TalabeeField name="phone" placeholder={t("phone")} />
            </div>

            <div className='login_dev'>
              <TalabeeField name="password" placeholder={t("Password")} />
            </div>

            <LoadingButton isLoading={isLoading} type="submit" >{t("Sign In")}</LoadingButton>
            <p className='navigateto' onClick={handleRegisterClick} >{t("or Register")}</p>

          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm