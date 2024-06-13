////  fourth section of cart page contain just a message  ////


import React from 'react'
import { Button,  Result } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ReviewBody = () => {
    const {t} = useTranslation();

  return (
    <div className="ReviewBody">
      <Result
      status="success"
      title={t("Successfully Purchased Order!")}
      subTitle={t("Thank You for Try  and hope to make another one")}
      extra={[
      ,
      <Link to="/">
        <Button type="primary" key="console">
          {t("Buy Again")}   
        </Button>
      </Link>
      ]}
      />
    </div>
  )
}

export default ReviewBody