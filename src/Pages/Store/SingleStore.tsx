import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'
// import { Store } from '../Home/HomeData'
import { Button, Collapse, CollapseProps, RadioChangeEvent, Rate } from 'antd'
// import { ProductSectionData } from '../Home/HomeData'
import { useTranslation } from 'react-i18next'
import ProductSection from '../../Components/Home/ProductSection'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useGetSingleStore } from '../../api/Store'
import LoadingPage from '../Loading/LoadingPage'


const SingleStore = () => {
  const { id }: any = useParams()
  const { data, isLoading } = useGetSingleStore(id);
  const Store = data?.data[0];
  // console.log(Store?.products);



  const { t } = useTranslation();

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const descriptionWords = Store?.description?.split(' ');
  const label = descriptionWords?.slice(0, 3).join(' ');
  const remainingDescription = descriptionWords?.slice(5).join(' ');

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: label,
      children: <p>{remainingDescription}</p>,
    }
  ];

  return (
    <Layout className='Store'>
      {isLoading ? <LoadingPage /> :
        <>
          <div className='Store_Info'>
            <div className='Store_Left'>
              <img src={Store?.image} alt={Store?.name} height="60%" />

            </div>
            <div className='Store_Right'>
              <h3>{Store?.name}</h3>
              <div>
                <h6>{t("Ratings")}  : </h6> <h6><Rate allowHalf disabled value={Store?.reviews_avg_rating} /></h6>
              </div>
              <div className='Store_Description'>
                <h6>{t("Description")}  : </h6>
                <Collapse ghost items={items} />
              </div>
              <div>
              </div>
              <div className='buttons_container'>
                <Button type="primary" onClick={() => toast.success(t("added to favourite"))}>
                  {t("Add To Favourite")}
                </Button>
              </div>
            </div>
          </div>
          <ProductSection data={Store?.products} />
        </>
      }
    </Layout>
  )
}

export default SingleStore