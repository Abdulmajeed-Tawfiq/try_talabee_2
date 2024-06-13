import React from 'react'
import SubTitle from './SubTitle'
import CardSwiper from './CardSwiper'
import { TCardProduct } from '../../Layout/app/Types'
import { IoIosFlash } from 'react-icons/io'

type TProductSection = {
  data: TCardProduct[]
}

const ProductSection: React.FC<TProductSection> = ({ data }) => {
  console.log(data);


  const TitleProps = { name: "Products", href: "/product", icon: <IoIosFlash /> }
  return (
    <div className='ProductSection pb-5'>
      <SubTitle {...TitleProps} />
      {data?.length === 0
        ? <div style={{ textAlign: "center" }}>there is no products on this Store</div>
        :
        <div className='Cards'>
          <CardSwiper data={data} />
        </div>
      }
    </div>
  )
}

export default ProductSection