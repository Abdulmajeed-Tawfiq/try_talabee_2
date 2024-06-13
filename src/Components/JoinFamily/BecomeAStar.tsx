import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field } from 'formik';
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton';
import TalabeeField from '../Utils/TalabeeField/TalabeeField';

const BecomeAStar: React.FC = () => {

  const { t } = useTranslation();

  return (
      <>

        <div className='Join_family_data_display'>
            <h1>{t("Become A Star")}</h1>
            <img className='join_family_image'  src='../MainPartnerr.svg'/>
        </div>

        <div className='join_family_inputs'>
            <div className='inputs_contianer'>
              <h1>{t('Your Personal Information')}</h1>
                <TalabeeField name='first_name' placeholder='First Name *' />
                <TalabeeField name='last_name' placeholder='Last Name *' />
                <TalabeeField name='email' placeholder='Email Address *' />
                <TalabeeField name='mobile' placeholder='Mobile *' />

                <TalabeeField label='Business Type' name='Select Business' type='Select' placeholder='Mobile *' />
                <TalabeeField name='company_name' placeholder='Company Name *' />
                <TalabeeField name='cr_number' placeholder='CR Number *' />

            </div>

            <div className='file_container'>
              <h1>{t("Order Info")}</h1>
              <TalabeeField label='Valid Commercial Registration' name='company_name' type='File' placeholder='Company Name *' />
            </div>
            <LoadingButton  type="submit">{t("Submit")}</LoadingButton>
        </div>
        
    </>
  );
};

export default BecomeAStar;