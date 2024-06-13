////  Default input used in Cart page  ////

import { Form, Input } from 'antd'
import React from 'react'
import useFormField from '../../../Hooks/useFormField';

const Default = ({ name, label, placeholder, isDisabled, onChange, props }: any) => {
  const { Field, isError, errorMsg, t } = useFormField(name, props);
  

  return (
    <div className="TalabeeField w-100" >
      <label htmlFor={name} className="text">
        {t(`${label ?  label : name}`)}
        </label>
      <Form.Item
        hasFeedback
        validateStatus={isError ? 'error' : ''}
        help={isError ? errorMsg : ''}
      >
        <Field
          as={Input}
          type="text"
          placeholder={t(`${placeholder ?placeholder  : name}`)}
          name={name}
          disabled={isDisabled}
          className="w-100"
        />
      </Form.Item>
    </div>
  );
};

export default Default;
