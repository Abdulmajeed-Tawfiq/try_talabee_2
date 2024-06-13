////  checkout component used in first section from cart page ////


import React from 'react'
import { Currency } from '../../Layout/app/Const';
import { Button, Divider } from 'antd';
import { useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';

const CheckoutForm = ({delivery_fees , sub_total ,setViewPage}:any) => {
  const formikContext = useFormikContext();
  const { values, submitForm } = formikContext;
  const {t} = useTranslation();
  const handleSubmit = () => {
    setViewPage(1);
  };
  
  return (
    <>
      <div style={{display:"flex" , flexDirection:"column" , alignItems:"flex-start"}}>
        <div style={{display:"flex" , alignItems:"center"}}><p>{t("Sub Total")} : </p> <p>{sub_total} {Currency}</p></div>
        <div style={{display:"flex" , alignItems:"center"}}><p>{t("Delivery Fees")} : </p> <p>{delivery_fees} {Currency}</p></div>
      </div>

      <div className='Divider'>  <Divider /></div>
      <div>{t("Total")} : {1150}{Currency}</div>
      <div> <Button block type='primary'onClick={handleSubmit}  >{t("Checkout")}</Button> </div>
    </>
  )
}

export default CheckoutForm