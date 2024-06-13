import { Form, Formik } from 'formik'
import TalabeeField from '../../Components/Utils/TalabeeField/TalabeeField'
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton';
import { useChangePassword } from '../../api/profile';
import { getValidationSchemaPassowrd } from './formUtils';

function ChangePassModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Function }) {
  const { t } = useTranslation();
  const { mutate: changePassword, isLoading, isSuccess } = useChangePassword();


  const handleSubmit = (values: any) => {
    console.log(values);
    changePassword({ ...values });
    if (isSuccess) {
      setIsOpen(false);
    }
  };

  const handleCancel = () => {
    setIsOpen(false)
  };

  return (
    <>
      <div className='ChangePassModal_overlay'></div>
      <div className='ChangePassModal'>
        <h1 className="text-center mb-3">{t(`Change Your`)} <span>{t("Password")}</span></h1>
        <Formik
          initialValues={{
            current_password: "",
            new_password: "",
            new_password_confirmation: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={getValidationSchemaPassowrd()}
        >
          {(formik) => (
            <Form>
              <TalabeeField name='current_password' label='Current Password' type='password' />
              <TalabeeField name='new_password' label='New Password' type='password' />
              <TalabeeField name='new_password_confirmation' label='Confirm New Password' type='password' />
              <div className="buttons">
                <Button onClick={handleCancel} >{t("cancel")}</Button>
                <LoadingButton type="submit" isLoading={isLoading}>
                  {t("save")}
                </LoadingButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>

  )
}

export default ChangePassModal