// import { useAllProductsData } from '../../Redux/DispatchData'
import ProductPagination from '../Product/ProductPagination';
import CardStore from '../../Components/Home/CardStore';

const StoresCards = ({ style, setstyle }: any) => {

  // const { AllProduct } = useAllProductsData();

  return (
    <div className={style ? "ProductsCards" : "ProductsCards2"} >
      {/* {
        AllProduct?.map((item: any, index: any) => {
          return (
            <div className={style ? "normalCard" : "FullCard"} key={index}><CardStore item={item} /></div>
          )
        })
      }
      <ProductPagination /> */}
    </div>

  )
}

export default StoresCards