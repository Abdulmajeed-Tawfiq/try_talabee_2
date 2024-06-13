import { CarFilled, MoneyCollectOutlined, PayCircleFilled } from "@ant-design/icons"
import { TBigAdsData, TCardProduct, TCardStore, THeroAd, TMovesAdsData, TProduct, TSpecialProperty, TStore, TbannerData } from "../../Layout/app/Types"
import { BsCalendarDay } from "react-icons/bs"
import { IoIosFlash } from "react-icons/io"

 export const Product =   {
    id : 1,
    name:"Classic Rolex Watch",
    img : "../Product/Product.png",
    off : 15,
    rate:4.5,
    price:50,
    old_price:250,
    brand : "Product Name 1",
    description:"Wireless Bluetooth HeadsetFM Frequency Response: 87.5 108 MHz Feature: FM Radio, Card Supported (Micro SD / TF)Made in China",
    type:"Neck Sweater",
    count:1,
  } 

//  export const Store =   {
//     id : 1,
//     name:"Store Name",
//     img : "../store/store.png",
//     off : 15,
//     rate:4.5,
//     description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ut maiores vel illo iste architecto ex quis expedita, ducimus dolorum magni asperiores laboriosam inventore, qui molestias fuga recusandae! Neque, enim. ",
//     type:"Neck Sweater",
//     count:1,
//   } 
  // export const AllProductdata :TProduct[] = [  Product,Product,Product,Product,Product,Product,Product,Product,Product,Product ,Product,Product,Product,Product,Product  ] 
//  export const data :TProduct[] = [  Product,Product,Product,Product,Product ] 
//  export const StoreData :TStore[] = [  Store,Store,Store,Store,Store] 
  // export const Cartdata :TProduct[] = [  Product,Product,Product ] 

    // export  const ProductSectionData: TCardProduct ={
    //     data :data,
    //     title:"title" ,
    //     href:"/products" ,
    //    count:10,
    //    icon:<IoIosFlash />
    //   }

    // export  const StoreSectionData: TCardStore ={
    //     data :StoreData,
    //     title:"Stores" ,
    //     href:"/stores" ,
    //    count:10,
    //    icon:<IoIosFlash />
    //   }

  //  export  const CategoriesData : string[] = ["Toys","Sports","Gaming","Furniture","Fashion","Cameras"]
 export const BigAdsData:TBigAdsData[]= [
    {
            header : 'Final Reduction',
            img : "../BigAds/Ads1.jpg" ,
            mainText:"Sale up to 20% Off",
            textPrice:"Only From ",
            Price:"270",
            color:"lightMood"
        },
           {
            header : 'Weekend Sale',
            img : "../BigAds/Ads1.jpg" ,
            mainText:"Fine Smart Speaker",
            textPrice:"Starting at ",
            Price:"185",
            color:"darkMood"
        }
    ]
    



const adData: THeroAd[] = [
  {
    imageUrl: '../HeroSection/ad1.jpeg',
    title: 'NEW ARRIVALS',
    subtitle: 'SUMMER SALE',
    discount: '30% OFF',
    link: '/Products',
        btn:"shop now"

  },
  {
    imageUrl: '../HeroSection/ad1.jpeg',
    title: 'NEW ARRIVALS',
    subtitle: 'SUMMER SALE',
    discount: '40% OFF',
    link: '/Products',
        btn:"shop now"

  },
];


// const bannerData : TbannerData[] = [
//   {
//     imageUrl: '../HeroSection/banner1.png',
//     title: 'NEW ARRIVALS',
//     subtitle: 'SUMMER SALE',
//     discount: '20% OFF',
//     link: '/Products',
//     btn:"Shop Now"
//   },
//    {
//     imageUrl: '../HeroSection/banner1.png',
//     title: 'NEW ARRIVALS',
//     subtitle: 'SUMMER SALE',
//     discount: '20% OFF',
//     link: '/Products',
//     btn:"Shop Now"
//   },
//    {
//     imageUrl: '../HeroSection/banner1.png',
//     title: 'NEW ARRIVALS',
//     subtitle: 'SUMMER SALE',
//     discount: '20% OFF',
//     link: '/Products',
//     btn:"Shop Now"
//   },
// ];
// export const HeroSectionData = {  bannerData,adData};


export const specialPropertiesData: TSpecialProperty[] = [
  {
    icon: <CarFilled />,
    title: 'Fast_Delivery',
    description: 'Start from $10',
  },
  {
    icon: <MoneyCollectOutlined />,
    title: 'Money Guarantee',
    description: '7 Days Back',
  },
  {
    icon: <BsCalendarDay />,
    title: '365 Days',
    description: 'For free return',
  },
  {
    icon: <PayCircleFilled />,
    title: 'Payment',
    description: 'Secure system',
  },
];

 export const MovesAdsData :TMovesAdsData={LeftText:'Black Friday Sales Left', RightText:'PAY ONLY FOR YOUR LOVING ELECTRONICS', Link:'/products'}
 
//  export const StaticAdsData :TMovesAdsData={LeftText:'Black Friday Sales Left', RightText:'PAY ONLY FOR YOUR LOVING ELECTRONICS', Link:'/products'}

