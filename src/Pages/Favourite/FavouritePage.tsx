import Layout from '../../Layout/app/Layout'
import { useGetFavStores, useGetFavProducts } from '../../api/wishlist'
import { useTranslation } from 'react-i18next'
import { Spin } from 'antd';
import CardProduct from '../../Components/Home/CardProduct';
import { fakeArray } from '../../Backend/Wishlist';
import { useSelector } from 'react-redux';
import NotAuth from '../../Layout/app/NotAuth';
import { useState } from 'react';
import NoFavorites from '../../Layout/app/NoFavorites';

const FavouritePage = () => {

  const { t } = useTranslation();
  const { data: Stores, isLoading: isLoadingStores } = useGetFavStores();
  const { data: Products, isLoading: isLoadingProducts } = useGetFavProducts();
  const { isAuthenticated } = useSelector((state: any) => state.auth)
  const [openStores, setOpenStores] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);

  console.log(Stores, Products);
  console.log(isLoadingStores, isLoadingProducts);



  const handleStores = () => {
    setOpenStores(true);
    setOpenProducts(false);
  }

  const handleProducts = () => {
    setOpenProducts(true);
    setOpenStores(false);
  }

  return (
    <Layout className='WishList darkmode_bg'>
      {
        isAuthenticated ?
          <>
            <h1 className="WishList_Header">
              {t("Favorites")}
            </h1>

            <div className='fav-section'>
              <button onClick={handleStores} className={openStores ? 'active' : ''}>
                <div className="fav-all stores">{t("stores")}</div>
              </button>
              <button onClick={handleProducts} className={openProducts ? 'active' : ''}>
                <div className="fav-all products">{t("Products")}</div>
              </button>
            </div>

            {openStores && <div className={'storesCards'}>
              {
                Stores?.data?.length === 0 ? <NoFavorites /> :
                  Stores?.data?.map((item: any, index: any) => (
                    <span className={'Fav_Single_Card'} key={index}>
                      <CardProduct item={item} />
                    </span>
                  ))
              }
            </div>}
            {openProducts && <div className={'ProductsCards'}>
              {
                Products?.data?.length === 0 ? <NoFavorites /> :
                  Products?.data?.map((item: any, index: any) => (
                    <span className={'Fav_Single_Card'} key={index}>
                      <CardProduct item={item} />
                    </span>
                  ))
              }
            </div>}

          </>
          : <NotAuth />}
    </Layout>
  )
}

export default FavouritePage