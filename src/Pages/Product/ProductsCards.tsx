import React from 'react'
import CardProduct from '../../Components/Home/CardProduct'
// import { useAllProductsData } from '../../Redux/DispatchData'
import ProductPagination from './ProductPagination'

const ProductsCards = ({ products, style, setstyle }: any) => {

  // const { AllProduct } = useAllProductsData();

  return (
    <div className={style ? "ProductsCards" : "ProductsCards2"} >
      {
        products?.map((item: any, index: any) => {
          return (
            <div className={style ? "normalCard" : "FullCard"} key={index}><CardProduct item={item} /></div>
          )})
      }
      <ProductPagination />
    </div>

  )
}

export default ProductsCards