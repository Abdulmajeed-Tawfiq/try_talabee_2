import React from 'react'
import { TbPointFilled } from 'react-icons/tb'
import { useTranslation } from 'react-i18next'
import { InfoProps } from './InfoProps'
import AboutImage from './AboutImage'
import Layout from '../../Layout/app/Layout'

const Info = ({title,text,response,about_image}:InfoProps) => {    
  
  const [t] = useTranslation();

  return (
    <Layout className='without_background'>
      <div className='info_container'>
        <h1>{t(title)}</h1>
        <div className='body'>
          <div className='left'>
            {/* this condition for which image page should display if there is third info page you should change this condition for switch case  */}
            {
                about_image
                ? <AboutImage/>
                : <img className='privacy_image' src='/Privacy/Privacy.png'/>
            }
          </div>

          <div className='right'>
            <h3><span>{t(text)}</span></h3>
            <p>
              {response}
            </p>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Info