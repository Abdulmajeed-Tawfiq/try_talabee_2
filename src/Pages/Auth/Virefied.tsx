import { useEffect, useState } from 'react';
import { Button, Result } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSendCode, useVerify } from '../../api/auth';
import { useTranslation } from 'react-i18next';
import ReactCodeInput from 'react-verification-code-input';
import { toast } from 'react-toastify';
import Translate from '../../Components/Utils/Translate';
import { USER_EMAIL } from '../../config/AppKey';
import { MailTwoTone } from '@ant-design/icons';
import AuthHeader from './HeaderComponent';

const Virefied = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();

  const [isInvalid, setIsInvalid] = useState(false);
  const [Code, setCode] = useState(''); // State to track the entered verification code
  const phone = location.state?.phone;

  const { mutate: verifyMutate, isSuccess } = useVerify(phone);
  const { mutate: sendCodeMutate, isSuccess: codeSuccess } = useSendCode(phone);

  const handleSubmit = async (code: any) => {
    verifyMutate({
      // email: localStorage.getItem(USER_EMAIL),
      verification_code: Code,
    });

    // navigate('/success_verify')
    // toast.success(t('Verified Successfully'));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(t('Verified Successfully'));
      navigate('/success_verify');
    }
  }, [isSuccess]);

  // useEffect(()=> {
  //   if(isError){

  // }
  // },[isError])

  const handleSendCode = () => {
    if (codeSuccess) {
      sendCodeMutate({ email: localStorage.getItem(USER_EMAIL) });
      toast.success(t('Code has been sent successfully to your email'));
    } else {
      toast.error(t('Failed to send code please try again'));
    }
  };

  return (
    <div className="Virefied">
      <AuthHeader />

      <Result
        icon={<MailTwoTone twoToneColor={"#d90217"} height={8} />}
        className="Result"
        title={t('Verify Code Sent to Email')}
        subTitle={t('Please enter the verification code sent to your email to complete the verification process')}
        extra={
          <div>
            <ReactCodeInput
              type="text"
              className="ReactCodeInput"
              onComplete={(code) => setCode(code)}
              autoFocus
              fields={5}
            />
            {isInvalid ? <p>{t('Verification code is invalid')}</p> : ''}
            <span onClick={handleSendCode} className="resend_code">
              {t('Resend Code')}
            </span>
          </div>
        }
        children={
          <div className="button_container">
            <Button className="verify_button" onClick={handleSubmit}>
              {t('Submit')}
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default Virefied;
