import React from 'react'
import { FamilyOption } from '../../Components/JoinFamily/JoinFamilyData'
import TalabeeField from '../../Components/Utils/TalabeeField/TalabeeField'
import { useFormikContext } from 'formik'
import { useTranslation } from 'react-i18next'
import BecomeAStar from '../../Components/JoinFamily/BecomeAStar'
import MarketPlace from '../../Components/JoinFamily/MarketPlace'
import { FamilyFormFactoryEnums } from '../../enums/FamilyFormFactory'
import BecomePartner from '../../Components/JoinFamily/BecomePartner'
import BecomeRider from '../../Components/JoinFamily/BecomeRider'

function JoinFamilyForm() {

  const formik = useFormikContext()
  const { t } = useTranslation();


  return (
    <>
      <div className='join_family_selcet'>
        <h2>{t('Join Our Family')}</h2>
        <TalabeeField name='type' label='Selection Type' option={FamilyOption} type='Select' placeholder='Selcet' />
      </div>

      <div className='join_family_data_section'>
        <FormFactory type={formik.getFieldProps('type').value as FormFactoryType} />
      </div>
    </>
  )
}

export default JoinFamilyForm



type FormFactoryType = FamilyFormFactoryEnums;

export const FormFactory = (props: { type: any }) => {

  switch (props.type) {
    case 1:
      return <BecomePartner />;
    case 2:
      return <BecomeRider />;
    case 3:
      return <BecomeAStar />;
    case 4:
      return <MarketPlace />;
    default:
      return <BecomePartner />;
  }
};