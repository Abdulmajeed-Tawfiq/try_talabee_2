import { Divider, InputNumber, Rate, Select } from 'antd'
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import {  Radio, Space } from 'antd';
import { useTranslation } from 'react-i18next';

const ProductsFilter = () => {
  
  const {t} = useTranslation();

const handleChange = (value: string) => {
  
};
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const onChangeInput = (value: any) => {
};
   const [value2, setValue2] = useState(3);
   const desc = ['Opss :(', 'bad', 'normal', 'good', 'Perfect :)'];

  return (
    <div className='ProductsFilter'>

      <span className='ProductsFilter_header'>{t("ProductsFilter")} </span>

      <Divider/> 

      <div>{t("Categories")}</div>
      
      <div>
        <Select
        defaultValue="lucy"
        style={{ width: "100%" }}
        onChange={handleChange}
        options={[  { value: 'Category Name 1', label: 'Category Name 1' }, ]} />
       </div>

       <div className='Shortby' style={{marginTop:"10px",width:"100%"}} >{t("Sort by")}:</div>

       <div style={{width:"100%"}}>
          <Select
            defaultValue={t("Relevance")}
            style={{ width: "100%" }}
            onChange={handleChange}
            options={[
              { value: 'Relevance', label: `${t("Relevance")}` },
              { value: 'Date', label: `${t("Date")}` },
              { value: 'Price To Low', label: `${t("Price To Low")}` },
              { value: 'Price To High', label: `${t("Price To High")}` },
            ]}
          />
      </div>

      <div> {t("Name")} </div>
      <div>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>{t("Option")} A</Radio>
            <Radio value={2}>{t("Option")} B</Radio>
            <Radio value={3}>{t("Option")} C</Radio>
          </Space>
        </Radio.Group>
      </div>

      <div>{t("Price Range")}</div>
      <div> 
        <InputNumber min={0} max={1000} defaultValue={0} onChange={onChangeInput} /> {`>`} 
        <InputNumber min={0} max={1000} defaultValue={250} onChange={onChangeInput} />
      </div>

      <div>{t("Ratings")}</div>
      <div>
        <Rate tooltips={desc}  className='Rate' onChange={setValue2} value={value2} />
      </div>

      <Divider/>

      <Space direction='vertical' >
        <Radio>{t("On Sale")}</Radio>
        <Radio>{t("In Stock")}</Radio>
        <Radio>{t("Featured")}</Radio>
      </Space>  

      <Divider/>          

    </div>
  )
}

export default ProductsFilter