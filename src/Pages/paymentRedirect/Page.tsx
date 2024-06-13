import React, { useEffect } from 'react'
import { useCheckout } from '../../api/cart'
import { useNavigate } from 'react-router-dom'
import LoadingPage from '../Loading/LoadingPage'
import { useTranslation } from 'react-i18next'

function Page() {
    const {t} = useTranslation();
    // const {mutate , isLoading , isSuccess} = useCheckout()
    const naviagte = useNavigate();
    const isSuccess = true;
    useEffect(()=>{
        if(isSuccess){
          localStorage.removeItem('payemnt_online')
            naviagte('/success_payment')
        }
    },[isSuccess])


    useEffect(()=>{

      const data =   JSON.parse(localStorage.getItem('payemnt_online') || "{}")
      // mutate({...data , zone_number:data.zone , building_number:data?.building +""})
      
    },[])
  return (
    <>
    <div style={{position:"absolute", top:"20%",left:"45%"}}>
      {t("Loading Your Order")} ...
    </div>
      <LoadingPage/>
    </>
  )
}

export default Page
