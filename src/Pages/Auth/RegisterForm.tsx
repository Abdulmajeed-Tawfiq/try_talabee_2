import { Field, Form, Formik, useFormikContext } from 'formik';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../api/auth';
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';
import { USER_EMAIL } from '../../config/AppKey';
import AuthHeader from './HeaderComponent';
import { GenderOption, getRegisterInitialValues, getRegisterValidationSchema } from './FormUtils';
import { DatePicker } from 'antd';
import TalabeeField from '../../Components/Utils/TalabeeField/TalabeeField';

function RegisterForm({ handleLoginClick }: any) {
  const navigate = useNavigate();
  const { mutate, isSuccess, data, isLoading } = useRegister();
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const [gender, setGender] = useState();
  const [birthday, setBirthday] = useState('2024-10-17');
  const [phoneValue, setPhoneValue] = useState();

  const form = useRef<any>(null);

  const handelSubmit = (values: any) => {
    mutate(
      {
        first_name: values['first_name'],
        last_name: values['last_name'],
        email: values['email'],
        password: values['password'],
        phone: values['phone'],
        birthday: values['birthday'],
        gender: values['gender'],
      }
    );
    //  return localStorage.setItem(USER_EMAIL , values.email );
  };

  const getPhoneValue = () => {
    if (form.current) {
      const phoneField = form.current.querySelector('[name="phone"]');
      if (phoneField) {
        return phoneField.value;
      }
    }
    return null;
  };


  useEffect(() => {
    if (isSuccess) {
      getPhoneValue();
      navigate('/verfied', { replace: true, state: { phone: getPhoneValue() } });
      toast.success(t('Successfully Registered'));
    }
  }, [isSuccess, navigate, data, dispatch, getPhoneValue]);

  // const options = useMemo(() => countryList().getData(), [])

  return (
    <div className="form-container sign-up">
      <Formik
        initialValues={getRegisterInitialValues()}
        validationSchema={getRegisterValidationSchema()}
        onSubmit={handelSubmit}
      >
        {({ errors, touched }) => (
          <Form ref={form}>
            <AuthHeader />
            <h2>{t('Create Account')}</h2>
            <div className="login_dev one_row_dev">
              <TalabeeField name="first_name" placeholder={t('first_name')} />
              <TalabeeField name="last_name" placeholder={t('last_name')} />
            </div>
            <div className="login_dev">
              <TalabeeField name="email" placeholder={t('Email')} />
            </div>

            <div className="login_dev">
              <TalabeeField name="phone" placeholder={t('Phone')} />
            </div>

            <div className="login_dev">
              <TalabeeField name="password" inputType="password" placeholder={t('password')} />
            </div>
            <div className="login_dev one_row_dev">
              <span className="birthday_elements">
                <label htmlFor="birthday" className="birthday_label">Birthday</label>
                <Field id="birthday" name="birthday" className="birthday" type="date" placeholder="Birthday" onChange={(birthday: any) => setBirthday(birthday)} />
              </span>
              <TalabeeField type="Select" name="gender" onChange={(gender) => setGender(gender)} option={GenderOption} placeholder="Gender" label='Gender' />
            </div>

            <LoadingButton isLoading={isLoading} type="submit">
              {t('Sign Up')}
            </LoadingButton>
            <p className="navigateto" onClick={handleLoginClick}>
              {t('or login')}
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
