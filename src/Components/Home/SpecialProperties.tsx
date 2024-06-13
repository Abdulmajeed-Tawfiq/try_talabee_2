import React from 'react';
import { TSpecialProperty } from '../../Layout/app/Types';
import { useTranslation } from 'react-i18next';


type TSpecialProperties = {data : TSpecialProperty[]}

const SpecialProperties: React.FC<TSpecialProperties> = ({data}) => {
  const {t} = useTranslation()
  return (
    <div className='special_properties'>
      {data?.map((property, index) => (
        <div className='special_property' key={index}>
          <span>
            {property.icon}
          </span>
          <div>
            <h5>{t(property.title)}</h5>
            <p>{t(property.description)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialProperties;
