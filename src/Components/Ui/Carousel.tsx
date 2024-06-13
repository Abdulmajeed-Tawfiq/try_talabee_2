import React from 'react';
import { Carousel } from 'antd';
import { TbannerData } from '../../Layout/app/Types';
import { Link } from 'react-router-dom';
import { BsArrowUpRight } from 'react-icons/bs';

type TCarouselApp = {
  data: TbannerData[]
}

const CarouselApp: React.FC<TCarouselApp> = ({ data }) => (
  <Carousel >
    {data?.map((item: TbannerData, index: number) => (
      <div className='banner_Container' key={index}>
        <img alt='' className='banner1' src={item.image} />
        {/* <div className='banner_Info'>
          <h1 className='underLineText'>{item.title}</h1>
          <h2>
            {item.subtitle} <br /> <strong>{item.discount}</strong>
          </h2>
          <Link to={item.link}>{item?.btn} <BsArrowUpRight /> </Link>
        </div> */}
      </div>
    ))}
  </Carousel>
);

export default CarouselApp;
