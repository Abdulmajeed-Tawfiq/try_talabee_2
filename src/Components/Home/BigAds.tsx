import React from 'react'
import { TBigAdsData } from '../../Layout/app/Types'
import { Currency } from '../../Layout/app/Const'

type TBigAds = {
    data : TBigAdsData[]
}
const BigAds:React.FC<TBigAds> = ({data}) => {
 
  
  return (
    <div className='BigAds'>
        {data?.map((item:TBigAdsData,index:number)=>{
            
            return(
                <div key={index} className={`BigAds_Item ${item?.color}`}  >
                    <img src={item?.img} alt={item?.header} />
                    <div className='BigAds_Info'>
                        <h6> {item?.header} </h6>
                        <h3> {item?.mainText} </h3>
                     <div>
                           <p> {item?.textPrice} </p>
                        <strong> {Currency} {item?.Price} </strong>
                     </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default BigAds