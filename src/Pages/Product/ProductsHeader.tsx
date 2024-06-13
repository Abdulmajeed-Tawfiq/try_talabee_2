import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import React from 'react'
import { BsFillTerminalFill } from 'react-icons/bs';
import WithDrawer from '../../HighOrderComponent/WithDrawer';
import ProductsFilter from './ProductsFilter';
import { useTranslation } from 'react-i18next';

const ProductsHeader = ({style,setstyle}:any) => {

    const {t} = useTranslation();
    const handleChange = (value: string) => {
      
  };
  return (
    <div className='Products_Header'>

      <div className='Products_Header_Left'>
      <WithDrawer
        className="showfillter"
        title=""
        button={ 
        <div className="Cart_Icon">
          <span>{t("Filter")}:</span><BsFillTerminalFill  />
        </div>}>
        <ProductsFilter/>
      </WithDrawer>

      <div className='Shortby'>{t("Sort by")}:</div>
        <div>
          <Select 
            defaultValue={t("Relevance")}
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'Relevance', label: `${t("Relevance")}` },
              { value: 'Date', label: t("Date") },
              { value: 'Price To Low', label: t("Price To Low") },
              { value: 'Price To High', label: t("Price To High") },
            ]}
          />
        </div>
      </div>

      <div className='Products_Header_Right'>
        <div>{t("View")}:</div>
        <div className={ style ? "secondary" : ""} onClick={()=>setstyle(true)} ><AppstoreOutlined /></div>
        <div className={ style ? "" : "secondary"} onClick={()=>setstyle(false)} ><BarsOutlined /></div>
      </div>
      
    </div>
  )
}

export default ProductsHeader