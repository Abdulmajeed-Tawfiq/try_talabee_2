import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Categories from './Categories';
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface CategoriesSwiperProps {
  data: object[];
}

const CategoriesSwiper: React.FC<CategoriesSwiperProps> = ({ data }) => {
  const language = localStorage.getItem('language') || "en";
  const [swiperDirection, setSwiperDirection] = useState<"rtl" | "ltr">("ltr");
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    // Set swiper direction based on language
    setSwiperDirection(language === "ar" ? "rtl" : "ltr");
  }, [language]);

  const slideNext = () => {
    swiperRef.current.slideNext();
  };

  const slidePrev = () => {
    swiperRef.current.slidePrev();
  };

  return (
    <div className='CategoriesSwiper'>
      <MdOutlineArrowBackIos className='arrow_svg_left' onClick={slidePrev} />
      <Swiper
        dir={swiperDirection}
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        breakpoints={{
          0: { slidesPerView: 2 },
          400: { slidesPerView: 3 },
          600: { slidesPerView: 3 },
          900: { slidesPerView: 4 },
          1200: { slidesPerView: 4 },
          1500: { slidesPerView: 4 },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        onSwiper={(swiper:any) => (swiperRef.current = swiper)} // Store swiper instance
      >
        {data?.map((item: any, index) => (
          <SwiperSlide key={index}>
            <Categories item={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <MdArrowForwardIos className='arrow_svg_right' onClick={slideNext} />
    </div>
  );
}

export default CategoriesSwiper;
