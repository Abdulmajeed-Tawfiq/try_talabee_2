import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
// import ContactImage from './ContactImage';
import Layout from '../../Layout/app/Layout';
import { useSendMessage } from '../../api/contact_us';
import File from '../../Components/Utils/FileInput/File';
import { useAddProduct } from '../../api/customer_product';
import { buildFormData } from "../../api/helper/buildFormData";

const BecomePartner: React.FC = () => {

  const [Name , setName] = useState('') 
  const [Description , setDescription] = useState('') 
  const [Price , setPrice] = useState('') 
  const [ClearIMageProduct, setClearIMageProduct] = useState('')


  // const {mutate , isSuccess} = useAddProduct()
  const isSuccess = true
  const form = useRef<any>(null);
  const { t } = useTranslation();
  const handelSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    if(!Name || !Description ||  !Price || !ClearIMageProduct ){
      toast.error(t("please_fill_all_input"))
      return;
    }
    if(Name || Description ||  Price || ClearIMageProduct ){
      toast.success(t("Send Successfully"))
      setName('')
      setPrice('')
      setDescription('')
      setClearIMageProduct("")
      return;
    }

    // mutate(getDataToSend({
    //   name:Name,
    //   description:Description,
    //   price:Price,
    //   image:ClearIMageProduct,
    // }))
  }
   const getDataToSend = (values: any): FormData => {
    const data = { ...values };
    
  
    const formData = new FormData();
    buildFormData(formData, data);
    return formData;
  };
  
  
  
  // useEffect(()=>{

    if(isSuccess){
      // toast.success(t('message_send_successfully'))
      // setName('')
      // setPrice('')
      // setDescription('')
      // setClearIMageProduct("")
    } 
  // },[isSuccess])

  return (
    <Layout className="Contact without_background" >
      <div className='BecomePartner'>
        <h1>{t('Become Partner')}</h1>
        <img className='partner_image' src='../MainPartnerr.svg'/>
      </div>
      <div>
        <Form ref={form} onSubmit={handelSubmit} className='partner_form'>

          <Form.Group controlId="formName">
            <Form.Label>{t('Prouduct Name')} *</Form.Label>
            <Form.Control type="text" name="to_name" placeholder={t('enter Product Name')} value={Name} onChange={(e)=>setName(e.target.value)} required autoFocus/>
          </Form.Group>
          <Form.Group controlId="formDesc">
            <Form.Label>{t('Product Description')} *</Form.Label>
            <Form.Control type="text" name="description" placeholder={t('enter Product description')} value={Description} onChange={(e)=>setDescription(e.target.value)} required/>
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>{t('Product Price')} *</Form.Label>
            <Form.Control type="number" name="price" placeholder={t('enter Product price')} value={Price} onChange={(e)=>setPrice(e.target.value)} required />
          </Form.Group>
          <File label={""} set={setClearIMageProduct} />

          <Button className='mt-4 w-100 button' type="submit">
            {t('Submit')}
          </Button>

        </Form>
      </div>
    </Layout>
  );
};

export default BecomePartner;