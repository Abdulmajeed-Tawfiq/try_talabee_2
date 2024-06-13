import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
//@ts-ignore
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import ContactImage from './ContactImage';
import { useSendMessage } from '../../api/contact_us';
import Layout from '../../Layout/app/Layout';

const Contact: React.FC = () => {
  const form = useRef<any>(null);
  const { t } = useTranslation();
  // const {mutate , isSuccess} = useSendMessage()

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (form.current) {
    //   emailjs.sendForm('service_49y5tqk', 'template_w4976q5', form.current, 'ivQFaIMbNe3DbNhA0')
    //     .then((result:any) => {
    //       form.current.reset();
    //       toast.success(t('contact.emailSentSuccess'));
    //     })
    //     .catch((error:any) => {
    //     });
    // }
    
    // mutate({
    //   name:Name,
    //   email:Email ,
    //   message:Message
    // })
    
    if(!Name || !Email || !Message  ){
      toast.error(t("please_fill_all_input"))
    }else{
      toast.success(t("Send Successfully"))
    }
    
    setMessage('')
    setName('')
    setEmail('')

  };

  const [Name , setName] = useState('') 
  const [Email , setEmail] = useState('') 
  const [Message , setMessage] = useState('') 

  // useEffect(()=>{
  //   if(isSuccess){
  //     setMessage('')
  //     setName('')
  //     setEmail('')
  //   }
  // },[isSuccess])


  return (
    <Layout className='without_background'> 
      <div className="Contact" id="ContactMe">
      <div>
        <h1>{t('contactUs.title')}</h1>
        <p>{t('contactUs.sendYourMessage')}</p>
        <ContactImage />
      </div>
      <div>
        <Form ref={form} onSubmit={sendEmail} className='contact_form'>
          <Form.Group controlId="formName">
            <Form.Label>{t('contactUs.name')} *</Form.Label>
            <Form.Control type="text" name="to_name" placeholder={t('contactUs.enterYourName')} value={Name} onChange={(e)=>setName(e.target.value)} required autoFocus />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>{t('contactUs.email')} *</Form.Label>
            <Form.Control type="email" name="from_name" placeholder={t('contactUs.enterYourEmail')} value={Email} onChange={(e)=>setEmail(e.target.value)} required/>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>{t('contactUs.message')} *</Form.Label>
            <Form.Control as="textarea" rows={4} name="message" placeholder={t('contactUs.typeYourMessage')}value={Message} onChange={(e)=>setMessage(e.target.value)} required />
          </Form.Group>
          <Button className='mt-4 w-100 button' type="submit">
            {t('contactUs.submit')}
          </Button>
        </Form>
      </div>
    </div>
    </Layout>
  );
};

export default Contact;