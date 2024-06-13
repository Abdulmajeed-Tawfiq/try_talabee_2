import React, { useState } from 'react'
import Layout from '../../Layout/app/Layout'

import { Spin } from 'antd';
import OrdersForm from './OrdersForm';
import { useGetAllOrders } from '../../api/orders';
import LoadingPage from '../Loading/LoadingPage';
import NotFoundPage from '../../Layout/app/NotFoundPage';
import { OrderData } from '../../Backend/Order';
import { fakeError, fakeLoading } from '../../Backend/FakeData';
import { useSelector } from 'react-redux';
import NotAuth from '../../Layout/app/NotAuth';
import NoData from '../../Components/Utils/error/NoData';
import Loading from '../../Components/Utils/Loading/Loading';

const Orders = () => {

  const { data, isLoading, isError } = useGetAllOrders();
  const { isAuthenticated } = useSelector((state: any) => state.auth)

  if (fakeLoading) {
    return <LoadingPage />
  }
  if (fakeError) {
    return <NotFoundPage />
  }

  return (
    <Layout className='Orders '>
      {isAuthenticated ?
        isError ? <NoData /> :
          isLoading ? <Loading /> :
            <OrdersForm data={OrderData} />
        : <NotAuth />
      }
    </Layout>
  )
}

export default Orders

