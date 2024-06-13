import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
// import { setProductData } from './Slice/productSlice';
// import { AllProductdata, Cartdata, HeroSectionData, ProductSectionData } from '../Pages/Home/HomeData';
import { setHeroSectionData } from './Slice/heroSectionSlice';
import { useEffect } from 'react';
import { setCartData } from './Slice/cartSlice';
import { setAllProduct } from './Slice/AllProductsSlice';
import { setStoreData } from './Slice/StoreSlice';


export const useProductData = () => {
  // const Product = useSelector((state: RootState) => state.Product.value);
  const dispatch = useDispatch();
   useEffect(() => {
  // dispatch(setProductData(ProductSectionData));
  }, [dispatch]);
  // return { Product, dispatch };
};

// export const useStoreData = () => {
//   const Store = useSelector((state: RootState) => state.Store.value);
//   const dispatch = useDispatch();
//    useEffect(() => {
//   dispatch(setStoreData(StoreSectionData));
//   }, [dispatch]);
//   return { Store, dispatch };
// };



// export const useHeroSectionData = () => {
//   const DataHeroSection = useSelector((state: RootState) => state.HeroSection.value);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(setHeroSectionData({ value: HeroSectionData }));
//   }, [dispatch]);

//   return { DataHeroSection, dispatch };
// };




// export const useCartData = () => {
//   const DataCart = useSelector((state: RootState) => state.Cart.value);
//     const count = useSelector((state: RootState) => state.Cart.count);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(setCartData(Cartdata));
//   }, [dispatch, DataCart,count]);

//   return { DataCart, dispatch ,count};
// };


// export const useAllProductsData = () => {
//   const AllProduct = useSelector((state: RootState) => state.AllProduct.value);
//   const dispatch = useDispatch();
//    useEffect(() => {
//   dispatch(setAllProduct(AllProductdata));
//   }, [dispatch]);
//   return { AllProduct, dispatch };
// };

