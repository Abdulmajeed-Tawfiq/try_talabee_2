import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { A11y, Autoplay, FreeMode, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import CardProduct from './CardProduct';
import { TProduct } from '../../Layout/app/Types';


interface CardSwiperProps {
  data: TProduct[];
}

const CardSwiper: React.FC<CardSwiperProps> = ({ data }) => {

  const language = localStorage.getItem('languae')

  const [swiperDirection, setSwiperDirection] = useState<"rtl" | "ltr">("ltr");

  useEffect(() => {
    // Set swiper direction based on language
    setSwiperDirection(language === "ar" ? "rtl" : "ltr");
  }, [language]);

  return (
    <div className='CardSwiper'>
      <Swiper
        dir={swiperDirection}
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}

        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
      >
        {
          data?.map((item: TProduct, index: number) => {
            return (
              <SwiperSlide key={index} ><CardProduct item={item} /></SwiperSlide>

            )
          })
        }

      </Swiper>
    </div>
  );
}

export default CardSwiper;
