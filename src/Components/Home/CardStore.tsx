import { Rate, Skeleton } from 'antd';
import { HeartFilled, PlusOutlined } from '@ant-design/icons';
import useLoadingState from '../../Hooks/useLoadingState';
import { useImageErrorStore } from '../../Hooks/useImageError';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useAuth } from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { StoresArray } from '../../Backend/Stores';

const CardStore = (
  { item }: any
) => {
  const [loading, resetLoading] = useLoadingState(true, 2000);
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const { t } = useTranslation()

  // const {mutate} = useAddToCart()
  // const {mutate:mutateAddFav} = useAddToFavourite()
  // const {mutate:mutateRemoveFav} = useRemoveFromFav()
  const itemm = StoresArray;

  return (
    <Skeleton className='unset' loading={loading} active >
      <div key={item?.id} className='Card_Product'>
        <div className='Card_Store_Top' >
          <span className='Left'>
            <div className='store_statues'>
              {
                true ? <div className='open'>{t("open")}</div> : <div className='close'>{t("close")}</div>
              }
            </div>
          </span>
          <span className='Right'>
            <HeartFilled className='AddFav_icon' onClick={() => {
              // mutateAddFav({
              //   product_id:itemm?.id,
              //   })
              toast.success(t("added to favourite"))
            }} />
          </span>
        </div>

        <div className='Card_Product_Mid' onClick={() => navigate(`/store/${item?.id}`)}>
          <img src={item?.image} onError={useImageErrorStore} alt={item?.name} />
        </div>

        <div className='Card_Product_Bottom'  >
          <div className='store_name' onClick={() => navigate(`/store/${item?.id}`)}>{item?.name}</div>
          <div className='rate'>
            <Rate allowHalf disabled defaultValue={item?.reviews_avg_rating} />
          </div>
        </div>

      </div>

    </Skeleton>
  );
};

export default CardStore;

