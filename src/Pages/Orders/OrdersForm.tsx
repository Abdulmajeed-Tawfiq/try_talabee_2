import React from 'react';
import {  Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

interface DataType {
  id: string;
  order_code: string;
  order_total: number;
  payment_status: string; 
  order_status: string;
}


const OrdersForm = ({data}:any) => {
 const navigate = useNavigate()
 const [t] = useTranslation()

 const columns: TableProps<DataType>['columns'] = [
  {
    title: t('order_code'),
    dataIndex: 'order_code',
    key: 'order_code',
    render: (text) => <a>{text}</a>,
  },
  {
    title: t('order_total'),
    dataIndex: 'order_total',
    key: 'order_total',
  },
  {
    title: t('payment_status'),
    dataIndex: 'payment_status',
    key: 'payment_status',
    render: (paymentStatus) => {
      let color = paymentStatus === 'paid' ? 'green' : 'volcano';
      if (paymentStatus === 'pending') {
        color = 'geekblue';
      }
      return (
        <Tag color={color} key={paymentStatus}>
          {paymentStatus.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: t('order_status'),
    key: 'order_status',
    dataIndex: 'order_status',
    render: (orderStatus) => {
      let color = orderStatus === 'delivered' ? 'green' : 'volcano';
      if (orderStatus === 'pending') {
        color = 'geekblue';
      }
      return (
        <Tag  color={color} key={orderStatus}>
          {orderStatus.toUpperCase()}
        </Tag>
      );
    },
  },
];

  return (
    <>
      <div className='Header'> {t("Your All Order total is :")}  {data?.order_all_total} </div>
      <Table
      className='order_table_container'
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate('/single_order?order_id=' + record?.id)
            },
          };
        }}
        columns={columns}
        dataSource={data?.map((item:any) => ({ ...item, key: item.id }))}
      />
    </>
  )
};

export default OrdersForm;
