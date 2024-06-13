import { Input } from 'antd'
import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { InputType } from 'reactstrap/types/lib/Input'
interface InputCartProps {
    name:string,
    placeholder?:string,
    type?:InputType 
}
function InputCart({name , placeholder , type = 'text'}:InputCartProps) {
    const {t} = useTranslation()
  return (
    <div style={{display:"flex" , flexDirection:"column" , width:"100%" , marginBottom:20}}>
        <Field as={Input} name={name} placeholder={placeholder ??name}  type={type}/>
        <ErrorMessage name={name}>{(message)=><span style={{color:"red"}}>{t(message)}</span>}</ErrorMessage>
    </div>
  )
}

export default InputCart
