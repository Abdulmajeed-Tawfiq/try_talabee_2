////  cart page have 4 section named by RenderPageContent every single section render on cart page by click on next or previous page  ////


import React, { useState, memo, useEffect } from 'react';
import { Formik, Form } from 'formik';
import StepsUi from '../../Components/Cart/StepsUi';
import CartBody from '../../Components/Cart/CartBody';
import DetailsBody from '../../Components/Cart/Details/DetailsBody';
import PaymentBody from '../../Components/Cart/Payment/PaymentBody';
import ReviewBody from '../../Components/Cart/Review/ReviewBody';
import { useCheckout, useCreatePayment, useGetCart } from '../../api/cart';
import LoadingPage from '../Loading/LoadingPage';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Layout/app/Layout';
import { fakeLoading } from '../../Backend/FakeData';
import { useSelector } from 'react-redux';
import NotAuth from '../../Layout/app/NotAuth';




const CartPage: React.FC = () => {
  const [ViewPage, setViewPage] = useState<number>(0);
  const propsState = { ViewPage, setViewPage };
  const { data, isLoading } = useGetCart();
  const { mutate, isLoading: LoadingCheckout, isSuccess } = useCheckout()
  const { mutate: createPayment, isLoading: LoadingPayment, isSuccess: SuccessPayemnt, data: UrlPaymnet } = useCreatePayment()
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state: any) => state.auth)

  useEffect(() => {
    if (SuccessPayemnt) {
      window.location.href = ((UrlPaymnet?.data));
    }
  }, [SuccessPayemnt])

  useEffect(() => {
    if (isSuccess) {
      navigate('/success_payment')
    }
  }, [isSuccess])

  if (fakeLoading) {
    return <LoadingPage />
  }

  const MemoizedStepsUi = memo(() => {
    return <StepsUi {...propsState} />;
  });

  const RenderPageContent = memo(() => {
    switch (ViewPage) {
      case 0:
        return <CartBody data={data?.data?.at(0)?.cart_items} cart={data?.data?.at(0)} {...propsState} />;
      case 1:
        return <DetailsBody {...propsState} />;
      case 2:
        return <PaymentBody {...propsState} isLoading={fakeLoading} />;
      case 3:
        return <ReviewBody />;
      default:
        return null;
    }
  });

  const handleSubmit = (values: ValuesType, actions: any) => {
    if (ViewPage == 2) {
      if (values['payment_method'] == 'online') {
        localStorage.setItem('payemnt_online', JSON.stringify(values));
        // createPayment({ ...values, zone_number: values.zone, building_number: values?.building + "" })
      } else {
        // mutate({ ...values, zone_number: values.zone, building_number: values?.building + "" })
      }
    }
  };


  return (
    <Layout className='CartPage '>
      {
        isAuthenticated ?
          <Formik
            initialValues={{
              cartItems: data?.data?.at(0)?.cart_items || [],
              zone: '',
              building: '',
              note: '',
              payment_method: "online",
              lat: "36.480",
              long: "36.848"
            }}
            // validationSchema={yup.object().shape({
            //   zone: yup.string().required('Zone is required'),
            //   building: yup.string().required('Building is required'),
            //   // note: yup.string().required('note is required'),
            //   lat: yup.string().required('required'),
            //   long: yup.string().required('required'),
            // })}
            onSubmit={handleSubmit}
          >
            <Form>
              <MemoizedStepsUi />
              <RenderPageContent />
            </Form>
          </Formik>
          : <NotAuth />
      }
    </Layout>
  );
};

export default CartPage;


interface ValuesType {
  building: string,

  lat: string,
  long: string,
  note: string,
  payment_method: string,
  zone: string,

}