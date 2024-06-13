import React from 'react'
import { useTranslation } from 'react-i18next';

type TMovesAds={
  LeftText : string;
  RightText : string;
  Link : string;
}

const MovesAds:React.FC<TMovesAds> = ({LeftText,RightText,Link}) => {

  const {t} = useTranslation();

  return (
    <div className='Moves_Ads'>
      <div className='Moves_Ads_Left'>
        {t(LeftText)}
      </div>
      <div className='Moves_Ads_Right'>
        <span className="Moves_Ads_Right_Text" data-text={t(RightText)} ></span>
      </div>
   </div>  
  )
}

export default MovesAds