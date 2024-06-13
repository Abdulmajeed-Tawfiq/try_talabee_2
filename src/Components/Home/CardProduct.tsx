////  this card used in swiper cards product  ////

import { Rate, Skeleton, Tooltip } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import useLoadingState from '../../Hooks/useLoadingState';
import { useImageErrorProduct } from '../../Hooks/useImageError';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useAuth } from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CardProduct = (
  { item }: any
) => {
  const [loading, resetLoading] = useLoadingState(true, 2000);
  const navigate = useNavigate()
  const { t } = useTranslation()

  // const {mutate} = useAddToCart()
  // const {mutate:mutateAddFav} = useAddToFavourite()
  // const {mutate:mutateRemoveFav} = useRemoveFromFav()
  // const item = productsArray;

  console.log(item);



  return (
    <Skeleton className='unset' loading={loading} active >
      <div key={item?.id} className='Card_Product'>
        <div className='Card_Product_Top' >
          <span className='Left'>{item?.name}</span>
          <span className='Right'>
            <Tooltip title={t("add to favotite")}>
            <HeartFilled className='AddFav_icon' onClick={() => {
              // mutateAddFav({
              //   product_id:item?.id,
              //   })
              toast.success(t("added to favourite"))
            }} />
            </Tooltip>
          </span>
        </div>

        <div className='Card_Product_Mid' onClick={() => navigate(`/product/${item.id}`)}>
          <img src={item?.images[0]} onError={useImageErrorProduct} alt={item?.name} />
        </div>

        <div className='Card_Product_Bottom'  >
          <div className='product_name' onClick={() => navigate(`/product/${item.id}`)}>{item?.name}</div>
          <div className='rate'>
            <Rate allowHalf disabled defaultValue={item?.reviews_avg_rating} />
          </div>
          <span>
          </span>
        </div>

      </div>

    </Skeleton>
  );
};

export default CardProduct;

