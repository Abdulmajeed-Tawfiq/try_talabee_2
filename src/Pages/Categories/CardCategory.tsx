import { Rate, Skeleton } from 'antd';
import { HeartFilled, PlusOutlined } from '@ant-design/icons';
import useLoadingState from '../../Hooks/useLoadingState';
import { useImageErrorProduct, useImageErrorStore } from '../../Hooks/useImageError';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useAuth } from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { StoresArray } from '../../Backend/Stores';

const CardCategory = (
  { item }: any
) => {
  const [loading, resetLoading] = useLoadingState(true, 2000);
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const { t } = useTranslation()

  // const {mutate} = useAddToCart()
  // const {mutate:mutateAddFav} = useAddToFavourite()
  // const {mutate:mutateRemoveFav} = useRemoveFromFav()

  return (
    <Skeleton className='unset' loading={loading} active >
      <div key={item?.id} className='Card_Category'>
        <div className="image">
          <img src={item?.icon} onError={useImageErrorProduct} alt={item?.name} />
        </div>
        <div className='text'>{item?.name}</div>
      </div>
    </Skeleton>
  );
};

export default CardCategory;

