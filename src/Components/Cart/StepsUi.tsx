//// this component appear in first 3 section for letting user know in which section he is  ////

import React, { useState } from 'react';
import { Divider, Steps } from 'antd';
import { useTranslation } from 'react-i18next';
interface StepsUiProps {
  setViewPage: React.Dispatch<React.SetStateAction<number>>;
  ViewPage: number
}
const StepsUi: React.FC<StepsUiProps> = ({ ViewPage, setViewPage }) => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(ViewPage);
  const onChange = (value: number) => {
  };

  return (
    <div className='StepsUi' >
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: t('CartInfo'),
            description: t("Checkout"),
          },
          {
            title: t('Details'),
            description: t("Billing Address"),
          },
          {
            title: t('Payment'),
            description: t("Pay with"),
          }
        ]}
      />

      <Divider />


    </div>
  );
};

export default StepsUi;