import Layout from '../../Layout/app/Layout';
import { useSelector } from 'react-redux';
import { Currency } from '../../Layout/app/Const';
import OrderStatus from '../../Components/Order/OrderStatus';
import {  BaseURL_IMAGE } from '../../api/config';
import NotFoundPage from '../../Layout/app/NotFoundPage';
import LoadingPage from '../Loading/LoadingPage';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {  fakeOrder } from '../../Backend/Order';
import { fakeError, fakeLoading } from '../../Backend/FakeData';
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
import NotAuth from '../../Layout/app/NotAuth';

  export default function SingleOrderPage() {
    
    const {t} = useTranslation();
    const  [search]= useSearchParams()
    const  order_id = search.get('order_id')
    const  {user, isAuthenticated}= useSelector((state:any)  => state.auth)
    
    // const {data, isLoading , isError} = useGetSingleOrder({order_id})
    const order = fakeOrder 
    
    if(fakeLoading){
      return <LoadingPage/>
    }
    if(fakeError){
      return <NotFoundPage/>
    }

    return (
      <Layout className='without_background single_order'>
        {
          isAuthenticated ? 
          <section
          className="h-100 gradient-custom single_order"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>
                  <MDBCardHeader className="px-4 py-5 card_header">
                    <MDBTypography tag="h5" className="text-muted mb-0 Gray_dark">
                      {t("Thanks for your Order")},{" "}
                      <span  className=''>{user?.name}</span>!
                    </MDBTypography>
                    <MDBTypography tag="h5" className="text-muted mt-4">
                   <OrderStatus  
                  //  order_status={order?.order_status}
                   />
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody className="p-4 card_body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        className="lead fw-normal mb-0 Gray_dark"
                      >
                        {t("Receipt")}
                      </p>
                      <p className="SingleOrderInfoFont small text-muted mb-0 Gray_dark">
                        {t("Order Code")}  : {order?.order_code}
                      </p>
                    </div>
  
                  {
                    order?.items?.map((item)=>{
                      return (
                      
                    <MDBCard className="shadow-0 border mb-4">
                      <MDBCardBody className='sub_body'>
                        <MDBRow>
                          <MDBCol md="2">
                            <MDBCardImage
                              src={BaseURL_IMAGE + item?.product_main_image}
                              fluid
                              alt="Product Image"
                              className='Gray_dark'
                            />
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 White_dark">{item?.product_translations?.at(0)?.name}</p>
                          </MDBCol>
                         
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small White_dark">Qty: {item.product_quantity}</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small White_dark">{item.product_price}</p>
                          </MDBCol>
                        </MDBRow>
                     
                      </MDBCardBody>
                    </MDBCard> 
  
                      )
                    })
                  }

                    <div className="SingleOrderInfo d-flex justify-content-between pt-2 ">
                      <p className="SingleOrderInfoFont fw-bold mb-0 Gray_dark">{t("Order Details")}</p>
                      <p className="SingleOrderInfoFont text-muted mb-0 Gray_dark">
                        <span className="fw-bold me-4 White_dark">{t("Total")}</span> {order?.order_total} {Currency}
                      </p>
                    </div>
  
                    <div className="SingleOrderInfo d-flex justify-content-between pt-2">
                      <p className="SingleOrderInfoFont text-muted mb-0 Gray_dark"><span className="fw-bold me-4 White_dark">{t("System Number")}</span> : 0097466456660</p>
                      <p className="SingleOrderInfoFont text-muted mb-0 Gray_dark">
                        <span className="fw-bold me-4 White_dark">{t("Discount")}</span> 0 {Currency}
                      </p>
                    </div>
  
                    <div className="SingleOrderInfo d-flex justify-content-between">
                      <p className="SingleOrderInfoFont text-muted mb-0 Gray_dark">
                        <span className="fw-bold me-4 White_dark">{t("Invoice Date")}</span> : {order?.created_at}
                      </p>
                      <p className="SingleOrderInfoFont text-muted mb-0 Gray_dark">
                        <span className="fw-bold me-4 White_dark">{t("Payment Method")}</span> {order?.payment_method}
                      </p>
                    </div>
  
                    <div className="SingleOrderInfo d-flex justify-content-between mb-5">
                    
                      <p className="SingleOrderInfoFont text-muted mb-0 Gray_dark">
                        <span className="fw-bold me-4 White_dark">{t("Delivery Charges")}</span>{" "}
                        {t("Free")}
                      </p>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter
                    className="border-0 px-4 py-5  bg_primary card_footer"
                    style={{
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <MDBTypography
                      tag="h5"
                      className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                    >
                      {t("Total paid")} {""}: <span className="h2 mb-0 ms-2">{order?.order_total}{Currency}</span>
                    </MDBTypography>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        : <NotAuth />
        }
      </Layout>
    );
  }