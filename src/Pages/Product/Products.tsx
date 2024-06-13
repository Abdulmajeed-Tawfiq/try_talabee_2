import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'
import ProductsHeader from './ProductsHeader';
import ProductsFilter from './ProductsFilter';
import ProductsCards from './ProductsCards';
import { useGetAllProductWithPaginations } from '../../api/Product';
import NoData from '../../Components/Utils/error/NoData';
import Loading from '../../Components/Utils/Loading/Loading';

const Products = () => {

  const [style, setstyle] = useState(true)
  const Props = { style, setstyle };
  const { data, isLoading, isError } = useGetAllProductWithPaginations()

  return (
    <Layout className='Products'>
      {isError ? <NoData /> :
        isLoading ? <Loading /> :
          <>
            <ProductsHeader {...Props} />
            <div className='Products_Body'>
              <ProductsFilter />
              <ProductsCards {...Props} />
            </div>
          </>
      }
    </Layout>
  )
}

export default Products