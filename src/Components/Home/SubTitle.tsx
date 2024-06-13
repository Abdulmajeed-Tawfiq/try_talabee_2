import React from 'react'
// import { TSubTitle } from '../../Layout/app/Types';
import { useTranslation } from 'react-i18next';
import { IoIosFlash } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { TSubTitle } from '../../Layout/app/Types';

const SubTitle = ({ name, href, icon }: TSubTitle) => {

  const [t] = useTranslation()
  return (
    <div className='SubTitle'>
      <div className='title'>
        {icon}
        {t(`${name}`)}
      </div>
      <div className='seeMore'>
        <Link to={`${href}`}>
          {t("See more")}
        </Link>
      </div>

    </div>
  )
}

export default SubTitle