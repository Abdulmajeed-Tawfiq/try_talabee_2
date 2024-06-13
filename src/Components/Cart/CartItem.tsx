//// Cart product  ////

import {
  CheckOutlined,
  CloseOutlined,
  MinusCircleOutlined,
  PlusCircleFilled,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { Card, Skeleton, Popconfirm, Button, Tooltip } from 'antd';
import useLoadingState from '../../Hooks/useLoadingState';
import { Currency } from '../../Layout/app/Const';
import { BaseURL_IMAGE } from '../../api/config';
import { useTranslation } from 'react-i18next';
import { useRemoveFromCart, useUpdateCartCount } from '../../api/cart';
import { toast } from 'react-toastify';
import { useImageErrorProduct } from '../../Hooks/useImageError';

interface CartItemProps {
  item: any;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [loading, resetLoading] = useLoadingState(true, 2000);
  const [price, setPrice] = useState<number>(Number(item.product.product_price));
  const [newCounter, setNewCounter] = useState<number>(item.quantity);
  const [isConfirmVisible, setConfirmVisible] = useState<boolean>(false);
  const [isApiLoading, setApiLoading] = useState<boolean>(false);

  // const {mutate:mutateAdd} = useUpdateCartCount()
  // const {mutate} = useRemoveFromCart()

  const { t } = useTranslation();

  const handleIncrement = () => {
    setNewCounter((prevCounter) => prevCounter + 1);
    setConfirmVisible(true);
  };

  const handleDecrement = () => {
    if (newCounter > 1) {
      setNewCounter((prevCounter) => prevCounter - 1);
      setConfirmVisible(true);
    }
  };

  const handleConfirmIncreament = async () => {
    setTimeout(() => {

    }, 100);
    setConfirmVisible(false);
    toast.success('Product quantity updated successfully');
    // try {
    //   setApiLoading(true);
    //   // Call the API with the new quantity
    //   // await mutateAdd({
    //   //   product_id: item?.product?.id,
    //   //   quantity: newCounter,
    //   // });
    //   // Reset state and hide confirm button
    //   setConfirmVisible(false);
    //   resetLoading();
    //   toast.success('Product quantity updated successfully');
    // } catch (error) {
    //   // Handle API error
    //   console.error('Error updating product quantity:', error);
    // } finally {
    //   setApiLoading(false);
    // }
  };




  return (
    <div className='CartItem'>
      {/* <Skeleton loading={loading} active avatar style={{ marginTop: 22 }}> */}
      <Card>

        <span className='Cart_Img'>
          <img
            alt=''
            style={{ objectFit: 'contain' }}
            src={BaseURL_IMAGE + item.product.product_main_image}
            onError={useImageErrorProduct}
          />
        </span>

        <span className='Cart_Info' style={{ marginInline: '10px' }}>
          <h5>{item?.product?.product_translations?.at(0)?.name}</h5>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <img
              style={{ borderRadius: '50%', width: 30, height: '30', marginRight: '10px' }}
              src={BaseURL_IMAGE + item.product.category?.category_image}
              onError={useImageErrorProduct}

            />
            <h6>{item.product?.category?.category_translations?.at(0)?.name}</h6>
          </span>
          <strong>
            {t("Price")} : {Currency}
            {price.toFixed(2)}
          </strong>
          <p> {t("Quantity")} :{newCounter} </p>
        </span>

        <span className='Card_Counter'  >
          <Button shape='circle' icon={<MinusCircleOutlined />} onClick={handleDecrement} />
          <div className='Counter'>{newCounter}</div>
          <Button shape='circle' icon={<PlusCircleFilled />} onClick={handleIncrement} />
          {/* {isConfirmVisible && (
              <span className='checked_quantity'>
                <Button
                  className='Checked_icon'
                  shape='circle'
                  icon={<CheckOutlined />}
                  onClick={handleConfirmIncreament}
                  loading={isApiLoading}
                />
              </span>
            )} */}

        </span>

        <span className='Cart_Delete'>
          <Popconfirm onConfirm={() => {
            //   mutate({
            //     product_id:item?.product?.id,
            // })
            setNewCounter(0)
            toast.success('Remove from cart')
          }}
            title={t("Delete the Item")} description={t("Are you sure to delete this Item") + "?"} okText={t("Yes")} cancelText={t("No")}>
            <Tooltip title={t("Delete")} placement='bottom'>
              <Button shape='circle' icon={<CloseOutlined />} danger />
            </Tooltip>
          </Popconfirm>
        </span>

      </Card>
      {/* </Skeleton> */}
    </div >
  );
};

export default CartItem;
