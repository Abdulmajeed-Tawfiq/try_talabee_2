////  second section of cart pgae contain putting user address  ////

import React, { useEffect, useRef, useState } from 'react';
import { Button, Input, Form } from 'antd';
import { useFormikContext } from 'formik';
import { object } from 'yup';
import Default from './Default';
import { useTranslation } from 'react-i18next';

const DetailsBody = ({ setViewPage }: any) => {
  const formikContext = useFormikContext();
  const { values, submitForm,isValid } = formikContext;
  const [isV, setIsV] = useState(false);
  const {t}  = useTranslation();
  const handleSubmit = () => {
    // if (isV) {
      setViewPage(2);
    // } else {
    //   console.error('Form validation failed. Please check the input fields.');
    // }
  };

  useEffect(() => {
    //@ts-ignore
    if (values.zone !== "") {
      setIsV(isValid);
    } else {

    }
  }, [isValid]);


  return (
    <div className="DetailsBody">
      <div className="DetailsBody_Left">
          <div className='Address'>
            <h5>{t("Shipping Address")}</h5>
            <div>
              <Default  name='zone' placeholder="Zone Number" type='number' />
            </div>
            <div>
              <Default  name='building' placeholder="Building Number"  type='number'/>
            </div>
            <div>
              <Default  name='note' placeholder="Note"  />
            </div>
            <div className='Adress_butttons'>
              <Button className='BackToCart_Button' type="dashed" block onClick={() => setViewPage(0)}>
                {t("Back to cart")}
              </Button>
              <Button onClick={handleSubmit} className='primary Payment_Button' type="primary" block >
                {t("Proceed To Payment")}
              </Button>
            </div>
          </div>
        
        </div>
      </div>
  );
};

export default DetailsBody;
function isEmpty(obj:object) {
  return Object.keys(obj).length === 0;
}