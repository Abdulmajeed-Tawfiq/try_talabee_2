import HeroSection from '../../Components/Home/HeroSection'
import MovesAds from '../../Components/Home/MovesAds'
import SpecialProperties from '../../Components/Home/SpecialProperties'
import Layout from '../../Layout/app/Layout'
import BigAds from '../../Components/Home/BigAds'
import { BigAdsData, MovesAdsData, specialPropertiesData } from './HomeData'
import CategoriesSwiper from '../../Components/Home/CategoriesSwiper'
import StaticAds from '../../Components/Home/StaticAds'
import { useWindowResize } from '../../Hooks/useWindowResize'
import StoreSection from '../Store/StoreSection'
import { useGetAllHome } from '../../api/Home'
import LoadingAntdNoLogo from '../../Components/Utils/Loading/LoadingAntdNoLogo'
import NoData from '../../Components/Utils/error/NoData'


const Page = () => {
  // const { Store } = useStoreData()
  // const { DataHeroSection } = useHeroSectionData();
  // const BigAdsData = data?.data[3]?.bigAds;
  const { data, isLoading, isSuccess, isError } = useGetAllHome();


  const featuredStores = data?.data[2]?.featuredStores;
  const slidersData = data?.data[1];
  const CategoriesData = data?.data[0]?.categories;
  const { windowWidth } = useWindowResize();


  return (
    <Layout className='HomePage'>
      {
        isError ? <NoData /> :
          !isSuccess && isLoading ? <LoadingAntdNoLogo /> :
            <>
              <HeroSection data={slidersData} />
              <SpecialProperties data={specialPropertiesData} />
              <CategoriesSwiper data={CategoriesData} />
              {windowWidth >= 700 ? <MovesAds {...MovesAdsData} /> : <StaticAds {...MovesAdsData} />}
              <StoreSection data={featuredStores} />
              <BigAds data={BigAdsData} />
              <StoreSection data={featuredStores} />
            </>
      }
    </Layout>
  )
}

export default Page