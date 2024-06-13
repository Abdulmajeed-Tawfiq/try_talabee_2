import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'
import ProductsHeader from '../Product/ProductsHeader';
import ProductsFilter from '../Product/ProductsFilter';
import StoresCards from './StoresCards';
import NoData from '../../Components/Utils/error/NoData';
import { useGetStores } from '../../api/Store';
import Loading from '../../Components/Utils/Loading/Loading';
// import ProductsHeader from './ProductsHeader';
// import ProductsFilter from './ProductsFilter';
// import ProductsCards from './ProductsCards';

const Stores = () => {

  const [style, setstyle] = useState(true)
  const Props = { style, setstyle };
  const { data, isLoading, isError } = useGetStores();

  return (
    <Layout className='Products'>
      {isError ? <NoData /> :
        isLoading ? <Loading /> :
          <>
            <ProductsHeader {...Props} />
            <div className='Products_Body'>
              <ProductsFilter />
              <StoresCards {...Props} />
            </div>
          </>
      }
    </Layout>
  )
}

export default Stores