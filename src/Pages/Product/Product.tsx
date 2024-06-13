import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/app/Layout'
// import { Product  } from '../../Pages/Home/HomeData'
import { Button, Collapse, CollapseProps, Rate, Tooltip } from 'antd'
import { Currency } from '../../Layout/app/Const'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useGetSingleProduct } from '../../api/Product'
import Loading from '../../Components/Utils/Loading/Loading'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from 'react-icons/fa6'
import { HeartFilled } from '@ant-design/icons';
import { toast } from 'react-toastify'
import { IoIosArrowForward } from "react-icons/io";

const OneProduct = () => {

  const { t } = useTranslation();
  // const [value, setValue] = useState(1);
  const [counter, setConter] = useState(1);
  const [selected, setSelected] = useState("");
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProduct(id);
  const Product = data?.data[0];
  const [totalPrice, setTotalPrice] = useState(Product?.price);

  useEffect(() => {
    if (Product?.price) {
      setTotalPrice(Product?.price);
    }
  }, [Product]);

  const handleIncrement = () => {
    setConter((prevCounter: number) => prevCounter + 1);
    setTotalPrice((prevTotalPrice: number) => prevTotalPrice + Product?.price);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setConter((prevCounter: number) => prevCounter - 1);
      setTotalPrice((prevTotalPrice: number) => prevTotalPrice - Product?.price);
    }
  };


  const onChange = (e: any) => {
    setSelected(e.target.name);
    console.log(selected);

    setTotalPrice(Product?.price + Number(e.target.value))
  };

  const descriptionWords = Product?.description?.split(' ');
  const label = descriptionWords?.slice(0, 3).join(' ');

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: label,
      children: <p>{Product?.description}</p>,
    }
  ];

  return (
    <Layout className='Product'>
      {
        isLoading ? <Loading /> :
          <>
            <div className='Product_Info'>
              <div className='Product_Left'>
                <div className="all-images">
                  {[1, 2, 3].map((img: any) =>
                  (<img src={"/Layout/error_product.jpg"} alt={"no_image"} key={img} />
                  ))}
                </div>
                <img src={"/Layout/error_product.jpg"} alt={Product?.name} className='main-image' />
              </div>
              <div className='Product_Right'>
                <div className="name">
                  <h3>{Product?.name}</h3>
                  <Tooltip title={t("add to favotite")}>
                    <HeartFilled className='AddFav_icon' onClick={() => {
                      // mutateAddFav({
                      //   product_id:item?.id,
                      //   })
                      toast.success(t("added to favourite"))
                    }} />
                  </Tooltip>
                </div>
                <div className='Product_Description'>
                  <h6>{t("Description")}  : </h6>
                  {
                    Product?.description ? <Collapse ghost items={items} />
                      : <p>{t("No Description")}</p>
                  }

                </div>
                <div>
                  <h6>{t("Ratings")}  : </h6> <h6><Rate allowHalf disabled value={Product?.reviews_avg_rating} /></h6>
                </div>
                <div>
                  <h6 >{t("Price")}  : </h6> <h6 className='Price'> {Product?.price} {Currency} </h6>
                </div>
              </div>
            </div>

            <div className='product-attributes'>
              {
                Product?.attributes.map((item: any) => (
                  <div className='attribute' key={item?.id}>
                    <p className='item-name'>{item?.details?.name}</p>
                    <hr />
                    <form >
                      {
                        item?.attribute_values.map((value: any) => (
                          <div className='attribute-value' key={value?.id}>
                            <label htmlFor={value?.id}>{value?.value}</label>
                            <span> + {value?.price} {Currency}</span>
                            <input type="radio" id={value?.id} name={value?.value} value={value?.price} onChange={onChange} checked={selected === value?.value} />
                          </div>
                        ))
                      }
                    </form>
                  </div>
                ))
              }
            </div>
            <hr />

            <div className='buttons_container'>
              <div className='quantity'>
                <Button shape='circle' icon={<FaMinus />} onClick={handleDecrement} />
                <div className='counter'>{counter}</div>
                <Button shape='circle' icon={<FaPlus />} onClick={handleIncrement} />
              </div>
              <Button className='submit-button' type="primary" block onClick={() => console.log(selected)}>
                <p>{t("Add To Cart")}</p>
                <p className='price'>{totalPrice} {Currency}</p>
                <IoIosArrowForward />
              </Button>
            </div>

          </>

      }
    </Layout>
  )
}

export default OneProduct