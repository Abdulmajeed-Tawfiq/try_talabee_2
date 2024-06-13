import React from 'react'
import { TCardStore } from '../../Layout/app/Types'
import SubTitle from '../../Components/Home/SubTitle'
import StoreSwiper from '../../Components/Home/StoreSwiper'
import { IoIosFlash } from 'react-icons/io'

type TStoreSection = {
  data: TCardStore 
}

const StoreSection: React.FC<TStoreSection> = ({ data }) => {
  // const { id, reviews_avg_rating, name, image, description} = data[0]
  const TitleProps = { name: 'FeaturedStores', href: 'stores', icon: <IoIosFlash /> }
  if (data !== undefined) {
    return (

      <div className='ProductSection pb-5'>
        <SubTitle {...TitleProps } />
        <div className='Cards'>
          <StoreSwiper data={data} />
        </div>
      </div>
    )
  }
  else{
    return null
  }

}

export default StoreSection