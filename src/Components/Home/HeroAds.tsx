import React from 'react';
import { THeroAd } from '../../Layout/app/Types';
import { Link } from 'react-router-dom';

type THeroAds = { data:THeroAd[]}

const HeroAds: React.FC<THeroAds> = ({data}) => {
  return (
    <div className='HeroSection_Ads'>
      {data.map((item:THeroAd, index:number) => (
        <div className='Ad_Container' key={index}>
          <img alt='' className='banner1' src={item.imageUrl} />
          <div className='Ad_Info'>
            <h4 className='underLineText'>{item.title}</h4>
            <h5>
              {item.subtitle} <br /> <strong>{item.discount}</strong>
            </h5>
            <Link to={item.link}>{item?.btn} </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroAds;
